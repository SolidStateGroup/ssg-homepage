
import propTypes from 'prop-types';
import md from '../../static/pages-blog-markdown/the-road-to-disruption-how-to-find-and-build-great-ideas.md';
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
