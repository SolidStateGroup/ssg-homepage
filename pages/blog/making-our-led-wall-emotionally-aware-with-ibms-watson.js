
import propTypes from 'prop-types';
import md from '../../static/pages-blog-markdown/making-our-led-wall-emotionally-aware-with-ibms-watson.md';
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
