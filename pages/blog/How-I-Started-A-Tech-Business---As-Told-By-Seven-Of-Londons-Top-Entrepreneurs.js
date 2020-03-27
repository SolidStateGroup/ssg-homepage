
import propTypes from 'prop-types';
import md from '../../static/pages-blog-markdown/How-I-Started-A-Tech-Business---As-Told-By-Seven-Of-Londons-Top-Entrepreneurs.md';
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
