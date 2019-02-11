// LICENSE : MIT
"use strict";
import Vue from 'vue';
import App from './component/app.vue';
import Store from "./store/UserStore";

if (process.env.NODE_ENV !== 'production') {
    Store.onChange(() => {
        console.log("Change", Store.getState());
    });
}
new Vue(App).$mount('#js-main');
