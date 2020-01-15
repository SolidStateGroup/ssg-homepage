import propTypes from 'prop-types';
import md from '../../static/pages-blog-markdown/100-percent-lighthouse-score.md';
import BlogPost from '../../components/BlogPost';


const BlogPostPage = props => (
    <BlogPost
      route={props.router.route}
      source={md}
    />
);

BlogPostPage.propTypes = {
    router: propTypes.object,
};

BlogPostPage.displayName = 'BlogPostPage';

export default BlogPostPage;
