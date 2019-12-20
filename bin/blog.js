const join = require('path').join;
const sortBy = require('lodash/sortBy');

const testFolder = join(__dirname, '../static/pages-blog-markdown');
const blogOutput = join(__dirname, '../static/blog.json');
const fs = require('fs');
const parseMarkdown = require('../common/parse-markdown');

const files = fs.readdirSync(testFolder);
const res = [];
files.forEach((file) => {
    const md = fs.readFileSync(`${testFolder}/${file}`, 'utf8');
    const data = parseMarkdown(md);
    res.push({
        ...data,
        url: file.replace('.md', ''),
        content: null,
    });
});

fs.writeFileSync(blogOutput, JSON.stringify(sortBy(res, 'sort')));
