'use strict'

import theRoutes from './routes.js'
import appHeader from './cmp/app-header.cmp.js'


const myRouter = new VueRouter({routes: theRoutes})

var app = new Vue({
    el: '#app',
    template:`
    <section class="app">
        <app-header></app-header>
        <router-view class="page-content"></router-view>
        <footer>Coffe&Tea Rights ©</footer>
    </section>

    `,
    created(){
        console.log('App was Created');
        
    },
    components: {
        appHeader,
    },
    router: myRouter,
})