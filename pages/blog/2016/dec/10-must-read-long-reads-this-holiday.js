
import propTypes from 'prop-types';
import md from '../../../../static/pages-blog-markdown/2016/dec/10-must-read-long-reads-this-holiday.md';
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
