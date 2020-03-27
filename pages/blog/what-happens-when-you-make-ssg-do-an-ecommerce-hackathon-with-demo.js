
import propTypes from 'prop-types';
import md from '../../static/pages-blog-markdown/what-happens-when-you-make-ssg-do-an-ecommerce-hackathon-with-demos.md';
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
