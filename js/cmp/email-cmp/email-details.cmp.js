'use strict'

import replyEmail from './reply-email.cmp.js'

export default {
    template: ` 
    <section class="email-details-cmp">
        <section class="icons-container flex space-between">
            <img 
                class="email-details-icons" 
                @click="closeEmail"
                src="img/back.svg"/>
            <div>
                <img v-if="email.isFavorite" 
                    class="email-details-icons" 
                    @click="toggleFavorite(email.id)"
                    src="img/favorite.svg"/>
                <img v-if="!email.isFavorite" 
                    class="email-details-icons" 
                    @click="toggleFavorite(email.id)"
                    src="img/not-favorite.svg"/>
                <img class="email-details-icons" 
                    href="#email-reply"
                    @click="toggleReply"
                    src="img/reply.svg"/>
                <img class="email-details-icons" 
                    @click="unreadEmail(email.id)"
                    src="img/unread.svg"/>
                <img class="email-details-icons" 
                    @click="confirmDelete(email.id)"
                    src="img/bin.svg"/>
            </div>
        </section>
        <reply-email id="email-reply" 
            @sendEmail="replyEmail"
            @toggleReply="toggleReply"
            :email="email" 
            v-if="isReplyMode">
        </reply-email>
            <section class="email-details-content">
                <h2 class="email-details-subject">{{email.subject}}</h2>
                <h3>{{email.sender}}</h3>
                <h3 class="email-details-reciver">To: {{email.reciver}}</h3>
                <h5>{{email.recivedAt}}</h5>
                <p>{{email.body}}</p>
            </section>
    </section>

    `,
    props: ['email'],
    data() {
        return {
            isReplyMode: false,
        }
    },
    methods: {
        closeEmail() {
            this.$emit('closeEmail', '')
        },
        confirmDelete(emailId) {
            const deleteAprroved = confirm('Are You Sure You To Delete This Message?');
            if (deleteAprroved) {
                this.$emit('deleteEmail', emailId)
            }
        },
        unreadEmail(emailId) {
            this.$emit('unreadEmail', emailId)
        },
        toggleReply() {
            this.isReplyMode = !this.isReplyMode;
        },
        replyEmail(emailId) {
            this.$emit('replyEmail', emailId)
        },
        toggleFavorite(emailId) {
            this.$emit('toggleFavorite', emailId)
        }
    },
    components: {
        replyEmail
    }
}