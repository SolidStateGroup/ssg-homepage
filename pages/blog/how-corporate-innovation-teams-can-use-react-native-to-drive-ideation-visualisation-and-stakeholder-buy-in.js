
import propTypes from 'prop-types';
import md from '../../static/pages-blog-markdown/how-corporate-innovation-teams-can-use-react-native-to-drive-ideation-visualisation-and-stakeholder-buy-in.md';
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
