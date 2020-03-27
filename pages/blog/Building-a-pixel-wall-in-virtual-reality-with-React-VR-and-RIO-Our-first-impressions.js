
import propTypes from 'prop-types';
import md from '../../static/pages-blog-markdown/Building-a-pixel-wall-in-virtual-reality-with-React-VR-and-RIO-Our-first-impressions.md';
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
