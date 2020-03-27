
import propTypes from 'prop-types';
import md from '../../static/pages-blog-markdown/what-ces-2018-highlights-tell-us-about-the-macro-trends-for-tech.md';
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
