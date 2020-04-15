
import propTypes from 'prop-types';
import md from '../../../../static/pages-blog-markdown/2017/apr/they-went-to-SXSW-and-I-alI-got-was-this-lousy-blog.md';
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
