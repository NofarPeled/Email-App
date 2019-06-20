'use strict'
 
export default {
    template: ` 
    <li :class="email.id" class="preview-email-li">
        <div class="prev-email-container">
            <img class="img-email-status" v-if="!email.isRead" src="img/unread.svg"/> 
            <img class="img-email-status" v-else="email.isRead" src="img/read.svg"/>
            <span class="prev-email-subject">{{email.subject}}</span>
            <span class="prev-mail-content">{{emailContentPrev}}</span>
            <span class="prev-mail-create-date">{{email.recivedAt}}</span>
        </div>
    </li>
    `,
    props: ['email'],
    data() {
        return {
           emailContentPrev: '',
        }
    },
    created(){
        this.emailContentPrev = this.longEmail()
        this.isRead = this.email.isRead;
    },
    methods: {
        longEmail(){
            if (this.email.length > 30){
                return this.email.body;  
            } 
            else {
                return this.email.body.substring(0,29)
            }
        },
    }
}