
import propTypes from 'prop-types';
import md from '../../static/pages-blog-markdown/We-Tested-Three-Prototyping-Tools-For-Mobile-Design-in-2018-Heres-What-We-Learned.md';
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
