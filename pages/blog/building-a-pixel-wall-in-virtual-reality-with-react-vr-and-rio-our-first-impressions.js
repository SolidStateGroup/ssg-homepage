
import propTypes from 'prop-types';
import md from '../../static/pages-blog-markdown/building-a-pixel-wall-in-virtual-reality-with-react-vr-and-rio-our-first-impressions.md';
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
