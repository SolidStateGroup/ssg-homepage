
import propTypes from 'prop-types';
import md from '../../../../static/pages-blog-markdown/2018/nov/we-tested-three-prototyping-tools-for-mobile-design-in-2018-heres-what-we-learned.md';
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
