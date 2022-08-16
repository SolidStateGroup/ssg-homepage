
import propTypes from 'prop-types';
import md from '../../../../public/pages-blog-markdown/2018/jan/what-ces-2018-highlights-tell-us-about-the-macro-trends-for-tech.md';
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
