'use strict'
import eventBus from '../event-bus.js';

export default {
    template: ` 
    <ul class="categories-list flex">
        <li @click="openNewEmail">New Email</li>
        <li @click="filterInbox">Inbox ({{counter.inbox}})</li>
        <li @click="filterBySent">Sent ({{counter.isSent}})</li>
        <li @click="filterByRecived">Recived ({{counter.isRecived}})</li>
        <li @click="filterByIsFavorite">Favorites ({{counter.isFavorite}})</li>
        <li @click="filterByIsRead">Read ({{counter.isRead}})</li>
        <li @click="filterByUnread">UnRead ({{counter.isUnread}})</li>
    </ul>
    `,
    props: ['counter'],
    data() {
        return {
            filterBy: {
                type: {
                    inbox: false,
                    isUnread: false,
                    isRead: false,
                    isFavorite: false,
                    isRecived: false,
                    isSent: false,
                }
            },
        }
    },
    created() {
    },
    methods: {
        openNewEmail() {
            this.$emit('newEmailMode', '')
        },
        filterBySent() {
            this.filterBy.type.isSent = true;
            this.emitFilter()
            this.filterBy.type = {
                inbox: false,
                isUnread: false,
                isRead: false,
                isFavorite: false,
                isRecived: false,
                isSent: false,
            }
        },
        filterByRecived() {
            this.filterBy.type.isRecived = true;
            this.emitFilter()
            this.filterBy.type = {
                inbox: false,
                isUnread: false,
                isRead: false,
                isFavorite: false,
                isRecived: false,
                isSent: false,
            }
        },
        filterByIsFavorite() {
            this.filterBy.type.isFavorite = true;
            this.emitFilter()
            this.filterBy.type = {
                inbox: false,
                isUnread: false,
                isRead: false,
                isFavorite: false,
                isRecived: false,
                isSent: false,
            }
        },
        filterByIsRead() {
            this.filterBy.type.isRead = true;
            this.emitFilter()
            this.filterBy.type = {
                inbox: false,
                isUnread: false,
                isRead: false,
                isFavorite: false,
                isRecived: false,
                isSent: false,
            }
        },
        filterByUnread() {
            this.filterBy.type.isUnread = true;
            this.emitFilter()
            this.filterBy.type = {
                inbox: false,
                isUnread: false,
                isRead: false,
                isFavorite: false,
                isRecived: false,
                isSent: false,
            }

        },
        filterInbox() {
            this.filterBy.type.inbox = true;
            this.emitFilter()
            this.filterBy.type = {
                inbox: false,
                isUnread: false,
                isRead: false,
                isFavorite: false,
                isRecived: false,
                isSent: false,
            }
        },
        emitFilter() {
            eventBus.$emit('set-filter', this.filterBy.type);
            console.log(this.filterBy.type,'filter by');
            
        },
    },
}