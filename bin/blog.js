const join = require('path').join;
const sortBy = require('lodash/sortBy');
const uniq = require('lodash/uniq');

const testFolder = join(__dirname, '../static/pages-blog-markdown');
const blogOutput = join(__dirname, '../static/blog.json');
const fs = require('fs');
const parseMarkdown = require('../common/parse-markdown');

const files = fs.readdirSync(testFolder);
let res = [];
let allTags = [];
files.forEach((file) => {
    const md = fs.readFileSync(`${testFolder}/${file}`, 'utf8');
    const data = parseMarkdown(md);
    allTags = allTags.concat(data.tags);
    res.push({
        ...data,
        url: file.replace('.md', ''),
        content: null,
    });
});
res = sortBy(res, 'sort')
res[0].allTags = uniq(allTags);
fs.writeFileSync(blogOutput, JSON.stringify(res));
