'use strict'

export default {
    template: ` 
    <section class="note-details-section">
        <div class="details-icons">
        <img  src="img/bin.svg"/>
        <img src="img/edit.svg"/>
        <img v-if="note.isPinned" src="img/pin.svg"/>
        <img v-if="!note.isPinned" src="img/unpin.svg"/>
        </div>

        <h2>{{note.title}}</h2>
        <p>{{note.txt}}</p>
        <img class="note-details-img" :src="note.image"/>
        {{note}}
    </section>
    `,
    props: ['note'],
    data() {
        return {
           
        }
    },
    methods: {

    },
    computed: {

    },
    components: {

    }
}