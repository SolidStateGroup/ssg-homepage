
import propTypes from 'prop-types';
import md from '../../static/pages-blog-markdown/React-Native-For-Scale-Ups-Use-Cases-and-Future-Proofing.md';
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
