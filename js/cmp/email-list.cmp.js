'use strict'
 
import emailPreview from './email-preview.cmp.js'

export default {
    template: ` 
    <section>
        <ul class="emails-list clean-list">
            <email-preview 
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
        }
    },
    components: {
        emailPreview,
    }
}