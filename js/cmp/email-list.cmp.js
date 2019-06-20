'use strict'

import emailPreview from './email-preview.cmp.js'

export default {
    template: ` 
    <section>
        <ul class="emails-list clean-list">
            <email-preview 
                v-for="currEmail in emails" 
                :email="currEmail" 
                :key="currEmail.id">
            </email-preview>
        </ul>
    </section>  
    `,
    props: ['emails'],
    data() {
        return {
           
        }
    },
    components: {
        emailPreview,
    }
}