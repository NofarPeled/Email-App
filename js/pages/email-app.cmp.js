'use strict'

import emailsService, { EMAILS_KEY } from '../services/email-app-service.js'
import emailList from '../cmp/email-list.cmp.js'
import emailDetails from '../cmp/email-details.cmp.js'
import newEmail from '../cmp/new-email.cmp.js'
import storageService from '../services/storage-service.js'
import filterEmail from '../cmp/filter-email.cmp.js'
import emailCategories from '../cmp/email-categories.cmp.js'
import filterService from '../services/email-filter-service.js'
import eventBus from '../event-bus.js';

export default {
    template: ` 
    <div class="email-app-cmp">
    <new-email 
        v-if="isNewEmailMode"
        @closeNewMail="closeNewMail"
        @addNewEmail="addNewEmail">
    </new-email>
    <filter-email 
        @set-filter="setFilter"
        v-if="!email &&!isNewEmailMode"></filter-email>
    <email-details v-if="email" 
        :email="email" 
        @closeEmail="closeEmail"
        @deleteEmail="deleteEmail"
        @replyEmail="replyEmail"
        @unreadEmail="unreadEmail"
        @markAsFavorite="markAsFavorite">
    </email-details>
    <div class="email-categories-list-div flex">
    <email-categories 
        :counter="sortCategories"
        @newEmailMode="newEmailMode"
        @set-filter="setFilter"
        v-if="!email &&!isNewEmailMode">
    </email-categories>
    <email-list v-if="!email &&!isNewEmailMode" 
        :emails="filterEmails" 
        class="email-list"
        @toggleRead="toggleRead"
        @toggleFavorite="toggleFavorite"
        @readEmail="readEmail">
    </email-list>
    </div>
    </div>      
    `,
    data() {
        return {
            emails: [],
            email: '',
            filter: {txt: '', type: null},
            counter: {
                isRead: [],
                isUnread: [],
                isFavorite: [],
                isSent: [],
                isRecived: [],
            },
            isNewEmailMode: false,
        }
    },
    created() {
        emailsService.query('Important Email!', `just kidding it's junk mail!`, 'Someone Don\'t Know', 'You')
            .then(emails => {
                this.emails = emails
            })
        eventBus.$on('set-filter', info => {
            this.setFilter(info)
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
        closeEmail(email) {
            this.email = email;
        },
        deleteEmail(emailId) {
            
            emailsService.findEmailById(emailId)
                .then(email => {
                    this.emails.splice(email, 1);
                    this.saveEmails
                    this.closeEmail('')
                })
        },
        unreadEmail(emailId) {

            emailsService.findEmailById(emailId)
                .then(email => {
                    email.isRead = false;
                    this.saveEmails
                    this.closeEmail('')
                })
        },
        addNewEmail(email) {

            const newEmail = emailsService.makeNewEmail(email.subject, email.body, email.sender, email.reciver)
            newEmail.isSent = true;

            this.emails.unshift(newEmail)
            this.saveEmails

            this.isNewEmailMode = false;
            this.filter = {txt: '', type: null};

        },
        replyEmail(email) {

            const replyEmail = emailsService.makeNewEmail(email.subject, email.body, email.sender, email.reciver)
            replyEmail.isRecived = true;

            this.emails.unshift(replyEmail)
            this.saveEmails
            this.closeEmail('')

        },
        setFilter(filter){

            if (typeof(filter)==='string') this.filter.txt = filter
            if (typeof(filter) === 'object') this.filter.type = filter         
        },
        newEmailMode() {
            this.isNewEmailMode = true;
        },
        closeNewMail() {

            this.isNewEmailMode = false;
            this.filter = {txt: '', type: null}
        },
        markAsFavorite() {

            this.email.isFavorite = !this.email.isFavorite
            this.saveEmails
        },
        toggleRead(emailId){
            emailsService.findEmailById(emailId)
            .then(email => {
                this.email = email;
                this.email.isFavorite = !this.email.isFavorite
                this.saveEmails
            })
            
        },
        toggleFavorite(emailId){
            emailsService.findEmailById(emailId)
            .then(email => {
                this.email = email;
                this.email.isRead = !this.email.isRead
                this.saveEmails
            })
        }
    },
    computed: {
        filterEmails() {
            return filterService.filterEmails(this.emails, this.filter)
        },
        saveEmails() {
            storageService.save(EMAILS_KEY, this.emails);
            emailsService.saveDB(this.emails)
        },
        sortByNewerFirst() {
            if (!this.filter.created) return this.emails
            let sortedList = this.emails.sort((a, b) => {
                return b.timeCreated - a.timeCreated
            })
            return sortedList
        },
        sortByOlderFirst() {

            if (!this.filter.created) return this.emails
            let sortedList = this.emails.sort((a, b) => {
                return a.timeCreated - b.timeCreated
            })
            return sortedList
        },
        sortCategories() {
            this.counter = {
                isRead: 0,
                isUnread: 0,
                isFavorite: 0,
                isSent: 0,
                isRecived: 0,
                inbox: 0,
            },
                this.emails.map(email => {
                    this.counter.inbox++
                    if (email.isRead) this.counter.isRead++
                    if (!email.isRead) this.counter.isUnread++
                    if (email.isFavorite) this.counter.isFavorite++
                    if (email.isSent) this.counter.isSent++
                    else this.counter.isRecived++
                })
            return this.counter
        },


    },
    components: {
        emailList,
        emailDetails,
        newEmail,
        filterEmail,
        emailCategories
    }
}

