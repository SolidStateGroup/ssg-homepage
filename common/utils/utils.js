import BaseUtils from './base/_utils';

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'GBP',
});
const Utils = global.Utils = Object.assign({}, BaseUtils, {
    nFormatter(num, digits) {
        const lookup = [
            { value: 1, symbol: '' },
            { value: 1e3, symbol: 'k' },
            { value: 1e6, symbol: 'M' },
            { value: 1e9, symbol: 'G' },
            { value: 1e12, symbol: 'T' },
            { value: 1e15, symbol: 'P' },
            { value: 1e18, symbol: 'E' },
        ];
        const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        const item = lookup.slice().reverse().find((item) => {
            return num >= item.value;
        });
        return item ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol : '0';
    },

    money: v => formatter.format(v).split(".")[0],

});

export default Utils;
