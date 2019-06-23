'use strict'

export default {
    template: `
    <section class="send-email">
        <div @click="closeNewMailMode" class="send-email-back-link"><img src="img/back.svg"></div>
        <span class="new-email-alert">{{alert}}</span>
        <div>from: <input type="text" v-model="newEmail.sender" value="YourEmailAdress@Gimel.com"/></div>
        <div>To: <input type="text" v-model="newEmail.reciver" placeholder="Send to..."/></div>
        <div> Subject: <input type="text" v-model="newEmail.subject" placeholder="Enter Subject"/></div>
        <div>
            Your Message: <br>
        <textarea type="text" v-model="newEmail.body" placeholder="Enter your message..."></textarea>
        <button class="send-new-email" @click="sendEmail">Send</button>
        </div>
    </section>

    `,
    data() {
        return {
            newEmail:{},  
            alert:'',
        }
    },
    methods: {
        sendEmail(){ 
            if (this.isValidEmail(this.newEmail.reciver)&&this.isValidEmail(this.newEmail.sender)){    
                this.$emit('addNewEmail',this.newEmail)             
            } 
            else {

                document.querySelector('.send-email').scrollIntoView()

                this.alert = 'Wrong Email, Check Again Before Sending!'
            }
        },
        isValidEmail(email){
            const regex  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(email)           
        },
        closeNewMailMode(){
            this.$emit('closeNewMail','')
        }
    },
    computed: {
    },
    components: {

    }
}