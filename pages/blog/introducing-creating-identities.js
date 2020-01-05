import Head from 'next/head';
import md from '../../static/pages-blog-markdown/introducing-creating-identities.md';
import BlogPost from '../../components/BlogPost';


const BlogPostPage = (props) => (
  <>
      <Head>
          <link rel="canonical" href={`https://bullet-train.io${props.router.route}`} />
      </Head>
      <BlogPost
        source={md}
      />
  </>
);

BlogPostPage.displayName = 'BlogPostPage';

export default BlogPostPage;
