'use strict'

export default {
    template: ` 

    <ul class="categories-list flex">
        
        <li @click="openNewEmail">New Email</li>
        <li @click="clearFilter">Inbox ({{emails.inbox}})</li>
        <li @click="filterBySent">Sent ({{emails.isSent}})</li>
        <li @click="filterByRecived">Recived ({{emails.isRecived}})</li>
        <li @click="filterByIsFavorite">Favorites ({{emails.isFavorite}})</li>
        <li @click="filterByIsRead">Read ({{emails.isRead}})</li>
        <li @click="filterByUnread">UnRead ({{emails.isUnread}})</li>
    </ul>
    `,
    props: ['emails'],
    data() {
        return {
            filterBy: {
            },
        }
    },
    created(){
    },
    methods:{
        openNewEmail(){
            this.$emit('newEmailMode','')
        },
        filterBySent(){
            this.filterBy.isSent = true;
            this.emitFilter()
            this.filterBy = {}
        },
        filterByRecived(){
            this.filterBy.isRecived = true;
            this.emitFilter()
            this.filterBy = {}
        },
        filterByIsFavorite(){
            this.filterBy.isFavorite = true;
            this.emitFilter()
            this.filterBy = {}
        },
        filterByIsRead(){
            this.filterBy.isRead = true;
            this.emitFilter()
            this.filterBy = {}
        },
        filterByUnread(){
            this.filterBy.isUnread = true;
            this.emitFilter()
            this.filterBy = {}
            
        },
        clearFilter(){
            this.filterBy = {}
            this.emitFilter()
        },
        emitFilter() {
            this.$emit('set-filter', this.filterBy);
        },
    },
}