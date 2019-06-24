'use strict'
import eventBus from '../../event-bus.js';

export default {
    template: `
    <section>
        <div class="container email-filter">
            <input class="email-filter-input"
            v-model="filterBy.txt" 
            @input="emitFilter" 
            autofocus placeholder="Search Emails...">
        </div>
    </section>
    `,
    data() {
        return {
            filterBy: {
                txt: '',
            },
        }
    },
    methods: {
        emitFilter() {
            eventBus.$emit('set-filter', this.filterBy.txt);            
        },
    },
}