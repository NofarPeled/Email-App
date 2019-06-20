'use strict'

import emailsService,{EMAILS_KEY} from '../services/email-app-service.js'
import emailList from '../cmp/email-list.cmp.js'
import storageService from '../services/storage-service.js'

export default {
    template: ` 
    <div>
    <h1> your emails! </h1>
    <email-list :emails ="emails" @readEmail="readEmail"></email-list>
    </div>
    `,
    data() {
        return {
            emails: []
        }
    },
    created() {
        emailsService.query('Important Email!', `just kidding it's junk mail!`,'Someone Don\'t Know')
            .then(emails => {
                this.emails = emails
            })

    },
    methods: {
        readEmail(id) {
            emailsService.findEmailById(this.emails, id)
                .then(email => {
                    email.isRead = true;
                    storageService.save(EMAILS_KEY,this.emails)
                })
        }
    },
    components: {
        emailList
    }
}

