'use strict'

export default {
    template: ` 
    <li :class="note.id" class="preview-note-li">
        <div class="note-div-icons">
            <img 
                v-if="note.isPinned" 
                @click.stop="toggleIsPinned(note.id)"
                src="img/pin.svg"/>
            <img 
                v-if="!note.isPinned" 
                @click.stop="toggleIsPinned(note.id)"
                src="img/unpin.svg"/>
        </div>
        <h2 v-if="note.title">{{note.title}}</h2>
        <p v-if="note.txt">{{note.txt}}</p>
        <ul v-if="note.todos.length > 0" class="clean-list">
            <li v-for="todo in note.todos">{{todo}}</li>
        </ul>
        <img v-if="note.image" :src="note.image"/>
    </li>
    `,
    props: ['note'],
    data() {
        return {
           
        }
    },
    props: ['note'],
    methods: {
        toggleIsPinned(noteId){
            this.$emit('toggle-pinned',noteId)            
        }
    },
    computed: {
    },

}