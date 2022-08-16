<img src="http://g.recordit.co/TY8wciTsQH.gif"/>


## Prerequisites

What things you need to install the software and how to install them


| Location                                                     | Suggested Version       |
| -------------                                                |:-------------:|
| <a href="https://nodejs.org/en/">NodeJS</a>                     | >= 6.0.0 |
| <a href="https://nodejs.org/en/">npm</a>                        | >= 4.0.0 |

# Deployment with Now
Out the box, this setup supports deploying to https://zeit.co
```$xslt
npm i now -g
now
```

## Installing
```
npm i
```

## Running
**Development**

Hot reloading for client / server
```
npm run dev
```

## Deploying

Every branch gets deployed with Zeit. See the deployments tab in this GitHub.

## Storybook

This project uses storybook, you can run ```npm run storybook``` , this will render stories according to /stories/index.


## Creating pages

As with any standard nextjs project you need to add any pages to /pages/url.js. See https://nextjs.org/learn/basics/navigate-between-pages/using-link.

There's a standardised Page component which will add any seo meta tags necessary. Usage:

```$xslt
          <Page title={Constants.titles.partners} canonical="partners">
               <div>Content</div>
          </Page>
```


## Creating a blog

There is an automatic blog generator built into this project, any pages within /static/pages/blog-markdown will be parsed and the metadata inside will generate a blog.json.



```$xslt
         ---
         title: Achieving a perfect 100% Google Lighthouse audit score with Next and Redux
         published: true
         description: Jumping down a satisfying rabbit hole with NextJS
         tags: webdev, showdev, react, javascript
         author: Kyle Johnson
         avatar: /public/images/blog/kyle.png
         date: 26-aug-2019
         ---
         <--- Markdown content here -->
```

Once you have created the post in the required folder you will need to create a route at blog/filename.js, within that you can create your markup, e.g.

```$xslt

import md from '../../static/pages-blog-markdown/100-percent-lighthouse-score.md';
import BlogPost from '../../components/BlogPost';


const BlogPostPage = props => (
    <BlogPost
      route={props.router.route}
      source={md}
    />
);

BlogPostPage.displayName = 'BlogPostPage';

export default BlogPostPage;

```

## Blog comments

This project makes use of isso, if you add a valid isso api to project.js.

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/kyle-ssg/c36a03aebe492e45cbd3eefb21cb0486) for details on our code of conduct, and the process for submitting pull requests to us.

## Getting Help

If you encounter a bug or feature request we would like to hear about it. Before you submit an issue please search existing issues in order to prevent duplicates.

## Get in touch

If you have any questions about our projects you can email <a href="mailto:projects@solidstategroup.com">projects@solidstategroup.com</a>.
