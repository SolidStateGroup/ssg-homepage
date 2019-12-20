import md from '../../static/pages-blog-markdown/writing-end-to-end-tests-web.md';
import BlogPost from '../../components/BlogPost';


const BlogPostPage = () => (
    <BlogPost
      source={md}
    />
);

BlogPostPage.displayName = 'BlogPostPage';

export default BlogPostPage;
