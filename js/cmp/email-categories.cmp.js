'use strict'
import eventBus from '../event-bus.js';

export default {
    template: ` 
    <ul class="categories-list flex">
        <li class="new-email-btn" @click="openNewEmail">New Email</li>
        <li class="email-category"  @click="filterInbox">Inbox ({{counter.inbox}})</li>
        <li class="email-category" @click="filterBySent">Sent ({{counter.isSent}})</li>
        <li class="email-category" @click="filterByRecived">Recived ({{counter.isRecived}})</li>
        <li class="email-category" @click="filterByIsFavorite">Favorites ({{counter.isFavorite}})</li>
        <li class="email-category" @click="filterByIsRead">Read ({{counter.isRead}})</li>
        <li class="email-category" @click="filterByUnread">UnRead ({{counter.isUnread}})</li>
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
    methods: {
        openNewEmail() {
            document.querySelector('body').scrollIntoView();
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
        },
    },
}