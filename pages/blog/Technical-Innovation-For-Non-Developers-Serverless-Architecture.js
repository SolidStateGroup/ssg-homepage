
import propTypes from 'prop-types';
import md from '../../static/pages-blog-markdown/Technical-Innovation-For-Non-Developers---Serverless-Architecture.md';
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
