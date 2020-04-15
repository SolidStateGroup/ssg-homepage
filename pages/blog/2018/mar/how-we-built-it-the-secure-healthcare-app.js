
import propTypes from 'prop-types';
import md from '../../../../static/pages-blog-markdown/2018/mar/how-we-built-it-the-secure-healthcare-app.md';
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
