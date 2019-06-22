'use strict'


export default {
    template: `
    <section>
        {{alert}}
        <div>from: <input type="text" v-model="newEmail.sender" value="YourEmailAdress@Gimel.com"/></div>
        <div>To: <input type="text" v-model="newEmail.reciver" placeholder="Send to..."/></div>
        <div> Subject: <input type="text" v-model="newEmail.subject" placeholder="Enter Subject"/></div>
        <textarea type="text" v-model="newEmail.body" placeholder="Enter your message..."></textarea>
        <button @click="sendEmail">Send</button>
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
                this.$emit('newEmail',this.newEmail)               
            } 
            else {
                this.alert = 'Wrong Email, Check Again Before Sending!'
            }
            this.newEmail = {}
        },
        isValidEmail(email){
            const regex  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(email)           
        }
    },
    computed: {
    },
    components: {

    }
}