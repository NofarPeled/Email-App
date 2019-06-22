'use strict'

import emailsService, { EMAILS_KEY } from '../services/email-app-service.js'
import emailList from '../cmp/email-list.cmp.js'
import emailDetails from '../cmp/email-details.cmp.js'
import newEmail from '../cmp/new-email.cmp.js'
import storageService from '../services/storage-service.js'
import filterEmail from '../cmp/filter-email.cmp.js'

export default {
    template: ` 
    <div class="email-app-cmp">
    <!-- <new-email @newEmail="addNewEmail"></new-email> -->
    <filter-email 
        @set-filter="setFilter"
        v-if="!email"></filter-email>
    <email-details v-if="email" 
        :email="email" 
        @closeEmail="closeEmail"
        @deleteEmail="deleteEmail"
        @replyEmail="replyEmail"
        @unreadEmail="unreadEmail"></email-details>
    <email-list v-if="!email" 
        :emails ="filterEmails" 
        @readEmail="readEmail"></email-list>
    </div>
    `,
    data() {
        return {
            emails: [],
            email: '',
            filter: null,
        }
    },
    created() {
        emailsService.query('Important Email!', `just kidding it's junk mail!`, 'Someone Don\'t Know','You')
            .then(emails => {
                this.emails = emails
            })
    },
    methods: {
        readEmail(id) {
            emailsService.findEmailById(id)
                .then(email => {
                    this.email = email;
                    email.isRead = true;
                    this.saveEmails
                })
        },
        closeEmail(email){
            this.email = email;
        },
        deleteEmail(emailId){
            emailsService.findEmailById(emailId)
                .then(email => {
                    this.emails.splice(email, 1);
                    this.saveEmails
                    this.closeEmail('')
                })
        },
        unreadEmail(emailId){
            emailsService.findEmailById(emailId)
                .then(email => {
                    email.isRead = false;
                    this.saveEmails
                    this.closeEmail('')
                })
        },
        addNewEmail(email){
            const newEmail = emailsService.makeNewEmail(email.subject,email.body,email.sender,email.reciver)
            this.emails.unshift(newEmail)
            this.saveEmails
        },
        replyEmail(email){
            const replyEmail = emailsService.makeNewEmail(email.subject,email.body,email.sender,email.reciver)
            this.emails.unshift(replyEmail)
            this.saveEmails
            this.closeEmail('')     
        },
        setFilter(filter) {
            this.filter = filter             
        },

    },
    computed: {
        saveEmails(){
            storageService.save(EMAILS_KEY, this.emails);
            emailsService.saveDB(this.emails)  
        },
        filterEmails(){
            //FILTER EMAILS BY TXT
            if (!this.filter) return this.emails;
            let currEmail = this.emails.filter(email => {
                return (email.subject.includes(this.filter.txt)||
                email.body.includes(this.filter.txt))
            })
            //FILTER EMAILS BY UN/READ
            if (this.filter.read === '') return currEmail;
            let filteredEmail = currEmail.filter(email=>{
                return (email.isRead === this.filter.read)
            })

            if (!this.filter.isFavorite) return filteredEmail;
            let favoriteEmails = filterEmail.filter(email=>{
                return (email.isFavorite === true)
            })
            return favoriteEmails
            
        },
                sortByNewreFirst(){
            if (!this.filter.created) return this.emails
            let sortedList = this.emails.sort(function(a, b) { 
                return b.timeCreated - a.timeCreated 
            })
            return sortedList
        },
        sortByOlderFirst(){
            if (!this.filter.created) return this.emails
            let sortedList = this.emails.sort(function(a, b) { 
                return a.timeCreated - b.timeCreated
            })
            return sortedList
        }

    },
    components: {
        emailList,
        emailDetails,
        newEmail,
        filterEmail
    }
}

