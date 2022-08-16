
import propTypes from 'prop-types';
import md from '../../../../public/pages-blog-markdown/2018/mar/technical-innovation-for-non-developers-serverless-architecture.md';
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
