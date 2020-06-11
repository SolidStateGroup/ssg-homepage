
import propTypes from 'prop-types';
import BlogPost from '../../../../components/BlogPost';


const BlogPostPage = props => (
    <BlogPost
      route={props.router.route}
      source="/static/pages-blog-markdown/2018/nov/using-our-continuous-integration-tool-to-continuously-integrate-our-continuous-integration-tool.md"
    />
);

BlogPostPage.displayName = 'BlogPostPage';
BlogPostPage.propTypes = {
    router: propTypes.object,
};

export default BlogPostPage;
