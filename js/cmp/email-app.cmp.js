'use strict'

import emailsService from '../services/email-app-service.js'
import emailList from '../cmp/email-list.cmp.js'
export default {
    template: ` 
    <div>
    <h1> your emails! </h1>
    <email-list :emails ="emails"></email-list>
    </div>
    `,
    data() {
        return {
           emails:[]
        }
    },
    created() {
        emailsService.query('Important Email!', `just kidding is junk mail!`)
        .then(emails =>{
            this.emails = emails
        })

    },
    components: {
        emailList
    }
}

