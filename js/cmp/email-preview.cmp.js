'use strict'

export default {
    template: ` 
    <li :class="email.id" class="preview-email-li">
        Subject: <span>{{email.subject}}</span>.....Content: <span >{{emailContentPrev}}</span>...Date: <span>{{email.recivedAt}}</span><br><br>
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
    },
    methods: {
        longEmail(){
            if (this.email.length > 30){
                return this.email.body;  
            } 
            else {
                return this.email.body.substring(0,29)
            }
        }
    }
}