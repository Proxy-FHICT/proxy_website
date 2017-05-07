// defined to be the entry point of the app in the package.json 
// creates the instance of the Vue application
// 

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import About from './About.vue';
import Home from './Home.vue';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    component: Home,
}, {
    path: '/about',
    component: About,
}]

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
    el: '#app',
    router,
    // overwrites the selected part of the dom
    //    selected above with `el`
    // with something you are givin it as a parameter
    // use the #app element as a hook and overwrite it with some other template
    render: h => h(App) // this parameter is what we are rendering instead of the #app element, it is loaded from the ./App.vue template file
})