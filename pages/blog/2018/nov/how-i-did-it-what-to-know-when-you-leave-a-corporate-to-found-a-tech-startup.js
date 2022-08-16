
import propTypes from 'prop-types';
import md from '../../../../public/pages-blog-markdown/2018/nov/how-i-did-it-what-to-know-when-you-leave-a-corporate-to-found-a-tech-startup.md';
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
