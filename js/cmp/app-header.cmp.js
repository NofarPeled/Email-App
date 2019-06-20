'use strict'

// import Somethind from './location.cmp.js';

export default {
    template: ` 
    <section class="main-navbar flex container space-between">
        <h2 class="logo">Make Time</h2>
        <img 
            class="open-main-nav-btn" 
            src="img/menu-icon.svg"/>
        <nav class="main-nav space-between">  
            <router-link class="align-center flex" to="/">Home</router-link> 
            <router-link class="align-center flex" to="/emails">Emails</router-link> 
            <router-link class="align-center flex" to="/notes">Notes</router-link> 
            <router-link class="align-center flex" to="/">Home 2</router-link> 
        </nav>
</section>
    `,
    data(){
        return {
            isMenuOpen: false,
        }
    },

}