
import propTypes from 'prop-types';
import md from '../../static/pages-blog-markdown/Using-our-continuous-integration-tool-to-continuously-integrate-our-continuous-integration-tool.md';
import BlogPost from '../../components/BlogPost';


const BlogPostPage = props => (
    <BlogPost
      route={props.router.route}
      source={md}
    />
);

BlogPostPage.displayName = 'BlogPostPage';
BlogPostPage.propTypes = {
    router: propTypes.object,
};

export default BlogPostPage;
