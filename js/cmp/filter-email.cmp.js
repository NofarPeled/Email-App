'use strict'
import eventBus from '../event-bus.js';

export default {
    template: `
    <section>
        <div class="flex space-between container email-filter">
            <input class="email-filter-input"
            v-model="filterBy.txt" 
            @input="emitFilter" 
            autofocus placeholder="Search Emails...">
        <!-- <select v-model="filterBy.created" @change="emitFilter">
            <option value="" selected>Sort By</option>
            <option value="true">Newer</option>
            <option value="false">Older</option>
        </select> -->
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
            eventBus.$emit('set-filter', this.filterBy);            
        },
    },
    computed: {

    },
    components: {

    }
}