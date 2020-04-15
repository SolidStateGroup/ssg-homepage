
import propTypes from 'prop-types';
import md from '../../../../static/pages-blog-markdown/2017/jan/laundry-is-dull-and-robots-are-cool-insights-from-CES-2017.md';
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
