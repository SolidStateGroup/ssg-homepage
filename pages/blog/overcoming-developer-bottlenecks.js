import md from '../../static/pages-blog-markdown/overcoming-developer-bottlenecks.md';
import BlogPost from '../../components/BlogPost';


const BlogPostPage = () => (
    <BlogPost
      source={md}
    />
);

BlogPostPage.displayName = 'BlogPostPage';

export default BlogPostPage;
