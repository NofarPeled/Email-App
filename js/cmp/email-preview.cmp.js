'use strict'

export default {
    template: ` 
    <li :class="email.id" class="preview-email-li">
        <section class="prev-email-container container flex">
            <div>
                <img class="img-favorite" 
                    src="img/not-favorite.svg"
                    v-if="!email.isFavorite"
                    @click.stop="toggleFavorite"/>

                <img class="img-favorite"
                    src="img/favorite.svg"
                    v-if="email.isFavorite"
                    @click.stop="toggleFavorite"/>

                <img class="img-email-status"
                    v-if="!email.isRead" 
                    src="img/unread.svg"/> 

                <img class="img-email-status" 
                    v-else="email.isRead" 
                    src="img/read.svg"/>

                <span :class="isReadEmail" class="prev-emails-sender">{{email.sender}}</span>

                <span :class="isReadEmail" class="prev-email-subject">{{email.subject}}</span>
            </div>
            
            <div>
                <span class="prev-email-content">{{emailContentPrev}}</span>
                <span class="prev-email-create-date">{{email.recivedAt}}</span>
            </div>
        </section>
    </li>
    `,
    props: ['email'],
    data() {
        return {
            emailContentPrev: ''
        }
    },
    created() {
        this.emailContentPrev = this.longEmail()
    },
    methods: {
        longEmail() {
            if (this.email.body.length < 30) {               
                return this.email.body;
            }
            else {
                return this.email.body.substring(0, 29)+'...'
            }
        },
        toggleFavorite(){
            this.email.isFavorite = !this.email.isFavorite;
        }
    },
    computed: {
        isReadEmail() {
            if (this.email.isRead) return 'read'
        },

    }
}