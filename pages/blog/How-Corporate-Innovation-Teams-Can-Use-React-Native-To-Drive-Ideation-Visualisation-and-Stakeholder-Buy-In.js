
import propTypes from 'prop-types';
import md from '../../static/pages-blog-markdown/How-Corporate-Innovation-Teams-Can-Use-React-Native-To-Drive-Ideation-Visualisation-and-Stakeholder-Buy-In.md';
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
