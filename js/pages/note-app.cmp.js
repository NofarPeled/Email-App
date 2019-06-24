'use strict'

import notesService, {NOTES_KEY} from '../services/note-service.js'
import eventBus from '../event-bus.js'
import notePreview from '../cmp/note-cmp/note-preview.cmp.js'
import noteList from '../cmp/note-cmp/note-list.cmp.js'
import noteDetails from '../cmp/note-cmp/note-details.cmp.js'
import noteAdd from '../cmp/note-cmp/note-add.cmp.js'
import noteFilter from '../cmp/note-cmp/note-filter.cmp.js'
import noteService from '../services/note-service.js';
import storageService from '../services/storage-service.js'



export default {
    template: ` 
    <section class="note-app-cmp">
        <note-filter></note-filter>
        <note-add></note-add>
        <note-details 
           :note="note" 
           v-if="note">
        </note-details>
        <note-list
           @toggle-pinned="togglePinned"
           @open-note="openNote"
           v-if="!note"
           :notes="notes">
        </note-list>
    </section>
    `,
    data(){
        return{
            notes: [],
            note: '',
        }
    },
    created(){
        notesService.query()
            .then(notes => {
                this.notes = notes
            })
        
    },
    methods: {
        togglePinned(noteId){
            noteService.findNoteById(noteId)
                .then(note => {
                    note.isPinned = !note.isPinned;
                    this.saveNotes
                })
        },
        openNote(noteId){
            noteService.findNoteById(noteId)
            .then(note=>{
                this.note = note;
            })
        }
    },
    computed: {
        saveNotes(){
          storageService.save(NOTES_KEY,this.notes)
          noteService.saveNotesDB(this.notes)  
        },
    },
    components: {
        noteList,
        noteDetails,
        noteAdd,
        noteFilter
    }
}

