import md from '../../static/pages-blog-markdown/cross-development-react-and-react-native.md';
import BlogPost from '../../components/BlogPost';


const BlogPostPage = () => (
  <BlogPost
    source={md}
  />
);

BlogPostPage.displayName = 'BlogPostPage';

export default BlogPostPage;
