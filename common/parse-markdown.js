import each from 'lodash/each';
import filter from 'lodash/filter';
import moment from 'moment';

const splitAt = index => x => [x.slice(0, index), x.slice(index)];

export default (source) => {
    const metaLength = source.match(/---.*?---\n*/sg)[0].length;
    const split = splitAt(metaLength)(source);
    const meta = split[0].split('\n');
    const content = split[1];
    const res = {
        content,
    };
    each(meta, (item) => {
        if (item.includes('title: ')) {
            res.title = item.replace('title: ', '');
        }
        if (item.includes('description: ')) {
            res.description = item.replace('description: ', '');
        }
        if (item.includes('author: ')) {
            res.author = item.replace('author: ', '');
        }
        if (item.includes('avatar: ')) {
            res.avatar = item.replace('avatar: ', '');
        }
        if (item.includes('date: ')) {
            const m = moment(item.replace('date: ', ''), 'DD-MMM-YYYY');
            res.dateFormated = m.format('MMM DD YYYY');
            res.date = m.toISOString();
        }
        if (item.includes('tags: ')) {
            res.tags = filter(item.replace('tags: ', '').split(','), i => i);
        }
    });
    return res;
};
