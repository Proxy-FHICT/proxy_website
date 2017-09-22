// defined to be the entry point of the app in the package.json 
// creates the instance of the Vue application
// 

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './_home/Home.vue';
import About from './_about/About.vue';
import Team from './_team/Team.vue'

Vue.use(VueRouter);

const routes = [{
    path: '/',
    component: Home,
}, {
    path: '/about',
    component: About,
}, {
    path: '/team',
    component: Team,
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