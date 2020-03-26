
import propTypes from 'prop-types';
import md from '../../static/pages-blog-markdown/we-built-a-giant-pixel-wall-for-fun-but-what-we-learnt-went-a-lot-further.md';
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
