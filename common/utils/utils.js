import BaseUtils from './base/_utils';

const Utils = global.Utils = Object.assign({}, BaseUtils, {

    scrollToTop: (timeout = 500) => {
        $('html,body').animate({ scrollTop: 0 }, timeout);
    },

    scrollToElement: (element, duration = 500) => {
        const elementY = window.pageYOffset + element.getBoundingClientRect().top;
        const startingY = window.pageYOffset;
        const diff = elementY - startingY;
        let start;

        // Bootstrap our animation - it will get called right before next frame shall be rendered.
        window.requestAnimationFrame(function step(timestamp) {
            if (!start) start = timestamp;
            // Elapsed milliseconds since start of scrolling.
            const time = timestamp - start;
            // Get percent of completion in range [0, 1].
            const percent = Math.min(time / duration, 1);

            window.scrollTo(0, startingY + diff * percent);

            // Proceed with animation as long as we wanted it to.
            if (time < duration) {
                window.requestAnimationFrame(step);
            }
        });
    },

    scrollToSignUp: () => {
        Utils.scrollToElement(document.getElementsByClassName('signup-form')[0]);
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
