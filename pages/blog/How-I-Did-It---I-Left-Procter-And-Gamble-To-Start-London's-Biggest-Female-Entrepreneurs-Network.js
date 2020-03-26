
import propTypes from 'prop-types';
import md from '../../static/pages-blog-markdown/How-I-Did-It---I-Left-Procter-And-Gamble-To-Start-London's-Biggest-Female-Entrepreneurs-Network.md';
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
