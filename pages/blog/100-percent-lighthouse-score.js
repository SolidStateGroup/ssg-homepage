import Head from 'next/head';
import md from '../../static/pages-blog-markdown/100-percent-lighthouse-score.md';
import BlogPost from '../../components/BlogPost';


const BlogPostPage = props => (
  <>
      <Head>
          <link rel="canonical" href={`${Project.canonicalUrl}${props.router.route}`} />
      </Head>
      <BlogPost
        source={md}
      />
  </>
);

BlogPostPage.displayName = 'BlogPostPage';

export default BlogPostPage;
