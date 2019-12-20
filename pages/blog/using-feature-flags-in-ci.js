import md from '../../static/pages-blog-markdown/using-feature-flags-in-ci.md';
import BlogPost from '../../components/BlogPost';


const BlogPostPage = () => (
    <BlogPost
      source={md}
    />
);

BlogPostPage.displayName = 'BlogPostPage';

export default BlogPostPage;
