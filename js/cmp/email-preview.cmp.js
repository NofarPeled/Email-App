'use strict'

export default {
    template: ` 
    <li :class="email.id" class="preview-email-li">
        <section class="prev-email-container container flex space-between">
            <div>
                <img class="img-favorite" 
                    src="img/not-favorite.svg"
                    v-if="!email.isFavorite"
                    @click.stop="toggleFavorite(email.id)"/>

                <img class="img-favorite"
                    src="img/favorite.svg"
                    v-if="email.isFavorite"
                    @click.stop="toggleFavorite(email.id)"/>

                <img class="img-email-status"
                    v-if="!email.isRead" 
                    @click.stop="toggleEmailStatus(email.id)"
                    src="img/unread.svg"/> 

                <img class="img-email-status" 
                    v-else="email.isRead" 
                    @click.stop="toggleEmailStatus(email.id)"
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
                return this.email.body.substring(0, 29) + '...'
            }
        },
        toggleFavorite(emailId) {
            this.email.isFavorite = !this.email.isFavorite;
            this.$emit('togle-favorite',emailId)
        },
        toggleEmailStatus(emailId){
            this.email.isRead = !this.email.isRead;
            this.$emit('toggle-read',emailId)
        }
    },
    computed: {
        isReadEmail() {
            if (this.email.isRead) return 'read'
        },

    }
}