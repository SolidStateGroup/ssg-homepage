
import propTypes from 'prop-types';
import md from '../../static/pages-blog-markdown/What-Happens-When-You-Make-SSG-Do-An-Ecommerce-Hackathon-With-Demos.md';
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
