'use strict'

export default {
    template: ` 
    <div>
        <img class="homepage-img" src="img/homepage-wallpaper.jpg"/>
        <section class="link-img-section flex">
            <div class="link-img-container"> 
                <img class="email-link-img" src="img/emails.svg"/>
            </div>
            <div class="link-img-container">
                <img class="notes-link-img" src="img/notes.svg"/>
            </div>
        </section>
    </div>
    `,
    data() {
        return {
           
        }
    },
    created() {
        console.log('homepage was created');
        
    },
    methods: {

    },
    computed: {

    },
    components: {

    }
}