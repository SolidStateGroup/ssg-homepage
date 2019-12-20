import md from '../../static/pages-blog-markdown/hacking-our-end-to-end-tests.md';
import BlogPost from '../../components/BlogPost';


const BlogPostPage = () => (
  <BlogPost
    source={md}
  />
);

BlogPostPage.displayName = 'BlogPostPage';

export default BlogPostPage;
