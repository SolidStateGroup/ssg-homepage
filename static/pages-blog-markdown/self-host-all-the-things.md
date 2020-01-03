---
title: Self Hosting all the Things
published: true
description: Why pay when you can host? 
tags: bullet-train, infrastructure, docker
author: Ben Rometsch
avatar: /static/images/blog/ben.png
date: 02-jan-2020
---

We're big proponents of Open Source here at [Bullet Train](https://bullet-train.io/) towers. One of the strengths of open source is that you're free to run services yourself. 

This post will guide you through getting a [Dokku](http://dokku.viewdocs.io/dokku/) server set up and deploying the [Bitwarden](https://bitwarden.com/) password manager onto the platform.

## VPS's are really cheap and good these days

We created an account with [Hetzner](https://www.hetzner.com/cloud) and had a machine running about 2 minutes later. €2.96 a month gets you 2gb RAM/1 VCPU/20GB machine with a decent, large scale provider. Pretty crazy! OK so we created our server running Ubuntu 18.04, set up SSH access and got root access to the machine. We're going to assume you are able to do this; if not there are a bunch of resources out there to get you to a root bash shell. 

## Server Setup

First we will get the Ubuntu installation up to date.

    apt update
    apt upgrade

Now we can install [Dokku](http://dokku.viewdocs.io/dokku/). Dokku is a fantastic piece of software that basically acts like a mini-Heroku. It can basically take [heroku buildpacks](https://devcenter.heroku.com/articles/buildpacks) or docker images and deploy them for you, taking care of all the behind the scenes management like SSL certificates, persistent volumes, domain names and nginx configuration. You can even extend it to run databases like MySQL or Postgres, as well as services like ElasticSearch or Redis. 

    # There might be later versions of this script, so check the dokku docs for the most recent one!
    wget https://raw.githubusercontent.com/dokku/dokku/v0.19.11/bootstrap.sh;
    sudo DOKKU_TAG=v0.19.11 bash [bootstrap.sh](http://bootstrap.sh/)

This command will take a while to run as there is a fair amount of software to install. Once its finished, you can browse to the IP address of your instance in a browser to supply your SSH public key. It's important to set up Dokku to use VirtualHost naming, which makes it easier to configure different services as subdomains on your server. 

![Self%20Hosting%20all%20the%20Things/dokku_install_at_DuckDuckGo_2020-01-02_15-23-02.png](/static/images/blog/post_images/dokku_install.png)

## Bitwarden Setup

OK so now we're good to get an application set up. One tool we rely on a lot here whilst [serving millions of feature flags a day](https://bullet-train.io/) is Bitwarden; a password manager that allows us to store and share private information securely. Like [Bullet Train](https://bullet-train.io/), Bitwarden is open source. So what we're going to do is install a Bitwarden compatible server that is written in Rust: [Bitwarden_rs](https://github.com/dani-garcia/bitwarden_rs). 

We're going to download the bitwarden_rs docker image, deploy it to Dokku, set up the subdomain virtualhost, generate a free Letsencrypt SSL certificate and then connect to the application. 

    # Download and tag the docker image
    docker pull bitwardenrs/server:latest
    docker tag bitwardenrs/server:latest dokku/bitwarden:v1.13.0
    
    # Create the application in Dokku
    dokku apps:create bitwarden
    
    # Deploy the application in Dokku
    dokku tags:deploy bitwarden v1.13.0
    
    # Set up the domain name of the application
    dokku domains:add bitwarden bitwarden.<yourdomain>.com

At this point, we need to create an "A" DNS record that resolves to `bitwarden.<yourdomain>.com` . How you manage this will depend on your domain name server setup. Just create an "A" record with the domain name, and point it to the IP address of your server. Wait a few minutes for the DNS to propagate, and then browse to your subdomain in a web browser. You should see something like this: 

![Self%20Hosting%20all%20the%20Things/Bitwarden_Web_Vault_2020-01-02_15-32-31.png](/static/images/blog/post_images/Bitwarden_Web_Vault.png)

## SSL everything

Right now, this site is being served in the clear over HTTP. Not good, especially for a password manager! Time to get our SSL certificate set up:

    # Install the Letsencrypt Dokku plugin
    sudo dokku plugin:install https://github.com/dokku/dokku-letsencrypt.git
    
    # Set up Letsencrypt
    dokku config:set --no-restart bitwarden DOKKU_LETSENCRYPT_EMAIL=<your email address>
    
    # Generate a certificate
    # This should generate some output showing either a success or failure. You might need to wait a while for the DNS to propagate before this works.
    dokku letsencrypt bitwarden
    
    # Set up letsencrypt to keep the certificate up to date
    dokku letsencrypt:auto-renew bitwarden

If you refresh your browser, you should now get redirected to HTTPS, with a valid SSL certificate provided for free by Letsencrypt. 

Before we can start to use Bitwarden, we need to make the database a permanent fixture on the server. Bitwarden_rs stores its data in a SQLite database, within the docker instance. The issue here is that if we restart or upgrade the docker instance, we will lose our database and all the data we've added to Bitwarden since docker instances are ephemeral. So the next step is to create a persistent volume within Dokku so that we don't destroy our database every time we upgrade the machine.  

## Persistence

The bitwarden_rs docker image stores its data in a folder located at `/data` within the container. What we need to do is create a mount point from this folder to the filesystem on our server instance.

    # Set up the volume mount point
    dokku storage:mount bitwarden /var/lib/dokku/data/storage/bitwarden:/data
    
    # Restart the docker container
    dokku ps:rebuild bitwarden

If we now look at the server we can see the database being stored on the file system outside of the docker container

    ll /var/lib/dokku/data/storage/bitwarden
    drwxr-xr-x 3 root  root    4096 Jan  2 16:42 ./
    drwxr-xr-x 3 dokku dokku   4096 Jan  2 16:42 ../
    -rw-r--r-- 1 root  root  139264 Jan  2 16:42 db.sqlite3
    -rw-r--r-- 1 root  root   32768 Jan  2 16:42 db.sqlite3-shm
    -rw-r--r-- 1 root  root   41232 Jan  2 16:43 db.sqlite3-wal
    drwxr-xr-x 2 root  root    4096 Jan  2 16:42 icon_cache/
    -rw------- 1 root  root    1193 Jan  2 16:42 rsa_key.der
    -rw------- 1 root  root    1679 Jan  2 16:42 rsa_key.pem
    -rw-r--r-- 1 root  root     270 Jan  2 16:42 rsa_key.pub.der

At this point, you probably want to set up backups for your instance. There are different ways to achieve this. You can set up full backups of your VPS instance, or you could use a tool like [restic](https://github.com/restic/restic) to automate backing up the folder at `/var/lib/dokku/data/storage/bitwarden`

## Lock it all down

It's now safe to sign up with a new Bitwarden account. Browse to your subdomain and create an account. Once you've done that, you will probably want to prevent any random stranger from also signing up to your Bitwarden app. You can achieve this by defining an environment variable `SIGNUPS_ALLOWED`.

    # Prevent further accounts from being created
    dokku config:set bitwarden SIGNUPS_ALLOWED=false

The great thing about this setup is that you can still invite your co-workers to create accounts on the platform, but only email addresses that you choose will be able to create accounts. 

Bitwarden provides open source clients for all major platforms, including mobile! If you download and run the clients, find the gear settings icon and provide the full domain name of your new Bitwarden server in the Server URL field:

![Self%20Hosting%20all%20the%20Things/Bitwarden_2020-01-02_15-59-08.png](/static/images/blog/post_images/Bitwarden.png)

You can now log in with your credentials and you're good to go. 

## What else can I run?

There are a bunch of open source projects that you can run on Dokku in this manner.

### Gitea

[Gitea](https://docs.gitea.io/en-us/install-with-docker/) is a git repository manager in the style of Gitlab and Github. It's written in Go, and consumes pretty minimal resources, considering how able it is. 

### Syncthing

Why pay for Dropbox when you can run [Syncthing](https://hub.docker.com/r/syncthing/syncthing)? 

### Miniflux

A great little [RSS server](https://miniflux.app/), also written in Go. 

## Where to go from here?

More complex server applications often need additional services to run, such as a database server or something like Redis or ElasticSearch. Dokku can manage this as well! But that will be for another post!
