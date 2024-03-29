'use strict'


export default {
    template: ` 
    <section class="main-navbar flex container space-between">
        <h2 class="logo">Make Time</h2>
        <img 
            class="open-main-nav-btn"
            @click="toggleNav"
            src="img/menu-icon.svg"/>
        <nav class="main-nav hide space-between">  
            <router-link class="align-center flex" to="/">Home</router-link> 
            <router-link class="align-center flex" to="/emails">Emails</router-link> 
            <router-link class="align-center flex" to="/notes">Notes</router-link> 
            <router-link class="align-center flex" to="/about">About</router-link> 
        </nav>
</section>
    `,
    data(){
        return {
        }
    },
    methods: {
        toggleNav(){
            if(document.querySelector('.main-nav').classList.contains('hide')){
                document.querySelector('.main-nav').classList.remove('hide')
            }
            else {
                document.querySelector('.main-nav').classList.add('hide')
            }
        },
    }}