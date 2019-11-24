import BaseUtils from './base/_utils';

const Utils = global.Utils = Object.assign({}, BaseUtils, {

    scrollToTop: (timeout = 500) => {
        $('html,body').animate({ scrollTop: 0 }, timeout);
    },

    scrollToElement: (selector, timeout = 500) => {
        const el = $(selector);
        if (!el || !el.offset) return;
        $('html,body').animate({ scrollTop: el.offset().top }, timeout);
    },

    scrollToSignUp: () => {
        Utils.scrollToElement('.signup-form');
    },

    getPlanName: (plan) => {
        switch (plan) {
            case 'side-project':
                return 'Side Project';
            case 'startup':
                return 'Startup';
            case 'scale-up':
                return 'Scale-Up';
        }
    },

});

export default Utils;
