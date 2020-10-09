// using with vue-i18n in CDN
/*eslint-disable */
import { isServer  } from '../utils/assist';

export default function (lang) {
    if (!isServer) {
        if (typeof window.iview !== 'undefined') {
            if (!('langs' in iview)) {
                iview.langs = {};
            }
            iview.langs[lang.i.locale] = lang;
        }
    }
};
/*eslint-enable */