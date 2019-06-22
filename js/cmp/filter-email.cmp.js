'use strict'

export default {
    template: `
    <section>
        <div class="flex space-between container email-filter">
            <input class="email-filter-input"
            v-model="filterBy.txt" 
            @input="emitFilter" 
            autofocus placeholder="Search Emails...">
        <select v-model="filterBy.read" @change="emitFilter">
            <option value="" selected>All</option>
            <option :value="true">Read</option>
            <option :value="false">Unread</option>
        </select>
        <select v-model="filterBy.created" @change="emitFilter">
            <option value="" selected>Sort By</option>
            <option value="true">Newer</option>
            <option value="false">Older</option>
        </select>
        </div>
    </section>
    `,
    data() {
        return {
            filterBy: {
                txt: '',
                read: '',
                created: true,
            },
        }
    },
    methods: {
        emitFilter() {
            this.$emit('set-filter', this.filterBy);
        },
    },
    computed: {

    },
    components: {

    }
}