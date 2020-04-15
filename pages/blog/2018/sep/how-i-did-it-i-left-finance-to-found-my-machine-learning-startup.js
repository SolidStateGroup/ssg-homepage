
import propTypes from 'prop-types';
import md from '../../../../static/pages-blog-markdown/2018/sep/how-i-did-it-i-left-finance-to-found-my-machine-learning-startup.md';
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
