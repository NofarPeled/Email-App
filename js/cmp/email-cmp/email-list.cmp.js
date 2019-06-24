'use strict'
 
import emailPreview from './email-preview.cmp.js'

export default {
    template: ` 
    <section class="emails-list-section">
        <ul class="emails-list clean-list">
            <email-preview 
                @toggleFavorite="toggleFavorite"
                @toggle-read="toggleRead"
                v-for="currEmail in emails" 
                :email="currEmail" 
                @click.native ="markAsRead(currEmail.id)"
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
    methods:{
        markAsRead(emailId){
            this.$emit('readEmail', emailId)
        },
        toggleRead(emailId){
            this.$emit('toggle-read',emailId)
        },
        toggleFavorite(emailId){
            this.$emit('toggleFavorite', emailId)
        }
    },
    components: {
        emailPreview,
    }
}