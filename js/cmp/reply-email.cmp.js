'use strict'

import emailService from '../services/email-app-service.js'

export default {
    template: ` 
    <section class="reply-email">
        <div>from: <input type="text" v-model="replyEmail.sender" value="email.reciver"></div>
        <div>To: <input type="text" v-model="replyEmail.reciver" value="email.sender"></div>
        <div> Subject: <input type="text" v-model="replyEmail.subject" value="email.subject"></div>
        <div>
        Your Message: <br>
        <textarea type="text" v-model="replyEmail.body" placeholder="Enter your message..."></textarea><br>
        <button @click="sendEmail">Send</button>
        </div>
    </section>
    `,
    props:['email'],
    data() {
        return {
            replyEmail: {
                subject: 'Re: '+this.email.subject,
                sender: this.email.reciver,
                reciver: this.email.sender,
                body: '',
            },
        }
    },
    methods: {
        sendEmail(){   
            this.$emit('sendEmail',this.replyEmail)
            this.$emit('toggleReply','')
        }
    }, 
}