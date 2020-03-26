
import propTypes from 'prop-types';
import md from '../../static/pages-blog-markdown/What-The-Gaming-Industry-Can-Teach-Corporates-About-Strategy-Security-and-Digital-Transformation.md';
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
