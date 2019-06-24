'use strict'

import notePreview from './note-preview.cmp.js'

export default {
    template: ` 
    <section class="note-list-section">
        <ul class="note-list clean-list flex">
        <note-preview 
            v-for="currNote in notes"
            @toggle-pinned="toggleIsPinned"
            :note="currNote"
            @click.native="openDetails(currNote.id)"
            :key="currNote.id"> 
        </note-preview>
        </ul>
    </section>
    `,
    props: ['notes'], 
    data() {
        return {
           
        }
    },
    methods: {
        toggleIsPinned(noteId){
            this.$emit('toggle-pinned',noteId)            
        },
        openDetails(noteId){
            this.$emit('open-note',noteId)
        }
    },
    computed: {

    },
    components: {
        notePreview
    }
}