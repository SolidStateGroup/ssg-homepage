import md from '../../static/pages-blog-markdown/self-host-all-the-things.md';
import BlogPost from '../../components/BlogPost';


const BlogPostPage = () => (
    <BlogPost
      source={md}
    />
);

BlogPostPage.displayName = 'BlogPostPage';

export default BlogPostPage;
