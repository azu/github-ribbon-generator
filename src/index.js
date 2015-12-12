// LICENSE : MIT
"use strict";
var Vue = require('vue');
var App = require('./component/app.vue');
import Store from "./store/UserStore";
if (process.env.NODE_ENV !== 'production') {
    Store.onChange(()=> {
        console.log("Change", Store.getState());
    });
}
new Vue({
    el: 'body',
    components: {
        app: App
    }
});