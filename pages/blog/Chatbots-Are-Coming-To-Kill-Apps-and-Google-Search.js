
import propTypes from 'prop-types';
import md from '../../static/pages-blog-markdown/Chatbots-Are-Coming-To-Kill-Apps-and-Google-Search.md';
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
