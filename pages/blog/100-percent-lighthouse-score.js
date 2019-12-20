import md from '../../static/pages-blog-markdown/100-percent-lighthouse-score.md';
import BlogPost from '../../components/BlogPost';


const BlogPostPage = () => (
    <BlogPost
      source={md}
    />
);

BlogPostPage.displayName = 'BlogPostPage';

export default BlogPostPage;
