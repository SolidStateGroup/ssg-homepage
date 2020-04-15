
import propTypes from 'prop-types';
import md from '../../../../static/pages-blog-markdown/2017/oct/5-things-to-look-for-in-react-native-developers.md';
import BlogPost from '../../../../components/BlogPost';


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
