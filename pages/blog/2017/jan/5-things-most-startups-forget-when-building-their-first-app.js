
import propTypes from 'prop-types';
import md from '../../../../public/pages-blog-markdown/2017/jan/5-things-most-startups-forget-when-building-their-first-app.md';
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
