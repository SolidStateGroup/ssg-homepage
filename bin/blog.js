const join = require('path').join;
const sortBy = require('lodash/sortBy');
const uniq = require('lodash/uniq');

const testFolder = join(__dirname, '../public/pages-blog-markdown');
const blogOutput = join(__dirname, '../public/blog.json');
const fs = require('fs');
const path = require('path');
const parseMarkdown = require('../common/parse-markdown');

let res = [];
let allTags = [];

const writeJSTemplate = md => `
import propTypes from 'prop-types';
import md from '../../../../static/pages-blog-markdown/${md}';
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
`;

const readFolder = (folder)=>{
    const files = fs.readdirSync(folder);

    files.forEach((file) => {
        if (!file.includes(".")) {
            readFolder(folder+"/"+file)
        } else {
            const md = fs.readFileSync(`${folder}/${file}`, 'utf8');
            const data = parseMarkdown(md);
            const jsFolder = join(__dirname, '../pages/blog', folder.replace(testFolder,""));
            if (!fs.existsSync(jsFolder)){
                fs.mkdirSync(jsFolder, { recursive: true });
            }
            const targetJSFile = file.replace('.md', '.js');
            const existingJSFiles = fs.readdirSync(jsFolder);

            allTags = allTags.concat(data.tags);
            // eslint-disable-next-line no-console
            console.log('Processing', file);
            let root = (folder.replace(testFolder,"") + "/").substring(1);

            if (existingJSFiles.indexOf(targetJSFile) === -1) {
                // eslint-disable-next-line no-console
                console.log('File exists', targetJSFile);
                fs.writeFileSync(path.join(jsFolder, targetJSFile), writeJSTemplate(root+file));
            }
            res.push({
                ...data,
                url:  root + file.replace('.md', ''),
                content: null,
            });
        }

    });
}
readFolder(testFolder)
res = sortBy(res, 'sort');
res[0].allTags = uniq(allTags);
fs.writeFileSync(blogOutput, JSON.stringify(res));
// eslint-disable-next-line no-console
console.log(`Wrote blog to ${blogOutput}`);
