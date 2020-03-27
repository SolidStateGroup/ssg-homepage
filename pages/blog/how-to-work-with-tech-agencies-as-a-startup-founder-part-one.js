
import propTypes from 'prop-types';
import md from '../../static/pages-blog-markdown/how-to-work-with-tech-agencies-as-a-startup-founder-part-one.md';
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
