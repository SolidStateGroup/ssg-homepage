
import propTypes from 'prop-types';
import md from '../../../../public/pages-blog-markdown/2018/oct/how-i-did-it-i-left-procter-and-gamble-to-start-londons-biggest-female-entrepreneurs-network.md';
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
