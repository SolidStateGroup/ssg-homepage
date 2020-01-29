const isScriptLoaded = function (url) {
    if (!url) url = 'http://xxx.co.uk/xxx/script.js';
    const scripts = document.getElementsByTagName('script');
    for (let i = scripts.length; i--;) {
        if (scripts[i].src == url) return true;
    }
    return false;
};

const isCssLoaded = function (url) {
    if (!url) url = 'http://xxx.co.uk/xxx/script.js';
    const scripts = document.getElementsByTagName('link');
    for (let i = scripts.length; i--;) {
        if (scripts[i].href == url) return true;
    }
    return false;
};

export const importScriptPromise = (src) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        if (isScriptLoaded(src)) {
            resolve();
            return;
        }
        document.body.appendChild(script);
        script.onload = resolve;
        script.onerror = reject;
        script.async = true;
        script.src = src;
    });
};

export const importCssPromise = (src) => {
    return new Promise((resolve, reject) => {
        const css = document.createElement('link');
        css.rel = 'stylesheet';

        if (isCssLoaded(src)) {
            resolve();
            return;
        }
        document.body.appendChild(css);

        css.onload = resolve;
        css.onerror = reject;
        css.async = true;
        css.href = src;
    });
};
