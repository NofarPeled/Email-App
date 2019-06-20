'use strict'

import emailsService from '../services/email-app-service.js'

export default {
    template: ` 
    <div>
        <h1>Email:</h1>
        <h3>Subject: {{email.subject}}</h3>
        <span>Content: {{email.body}}</span>
        <p>was sent at: {{email.sentAt}}</p>
    </div>
    `,
    data() {
        return {
           email: ''
        }
    },
    created() {
        emailsService.makeNewEmail('Important Email!', `just kidding is junk mail!`)
        .then(email =>{
            this.email = email
        })
    },
    computed: {

    },
    components: {

    }
}

