
import propTypes from 'prop-types';
import md from '../../static/pages-blog-markdown/How-I-Did-It-I-Left-The-BBC-While-Heavily-Pregnant-To-Found-A-Parents-Tech-Startup.md';
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
