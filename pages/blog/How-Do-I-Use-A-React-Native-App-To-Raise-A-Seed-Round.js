
import propTypes from 'prop-types';
import md from '../../static/pages-blog-markdown/How-Do-I-Use-A-React-Native-App-To-Raise-A-Seed-Round.md';
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
