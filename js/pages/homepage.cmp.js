'use strict'

export default {
    template: ` 
    <div class="homepage-div">
        <img class="homepage-img" src="img/homepage-wallpaper.jpg"/>
        <section class="link-img-section flex">
            <router-link class="link-img-container" to="/emails">
                <img class="email-link-img" src="img/emails.svg"/>
            </router-link> 
            <router-link class="link-img-container" to="/notes">
                <img class="notes-link-img" src="img/notes.svg"/>
            </router-link>
        </section>
    </div>            
    `,
    data() {
        return {
           
        }
    },
    created() {       
    },
    methods: {

    },
    computed: {

    },
    components: {

    }
}