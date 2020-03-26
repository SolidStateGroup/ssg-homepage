
import propTypes from 'prop-types';
import md from '../../static/pages-blog-markdown/What- CES-2018-Highlights-Tell-Us-About-The-Macro-Trends-For-Tech.md';
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
