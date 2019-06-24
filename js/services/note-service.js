'use strict'

import {utilService} from './util-service.js'
import storageService from './storage-service.js'

let notesDB = [
    {
        id: utilService.makeId(),
        type: 'todos',
        title: 'Todos For Today!',
        txt: '',
        image: '',
        todos: ['Learn JS', 'Master CSS', 'Know HTML'],
        youTube: '',
    },
    {
        id: utilService.makeId(),
        type: 'image',
        title: 'Chill',
        txt: '',
        image: 'http://www.erblicken.com/wp-content/uploads/2017/10/Funny_Lilly_klein.jpg',
        todos: [],
        youTube: '',
    },
    {
        id: utilService.makeId(),
        type: 'image',
        title: 'Laughing HA HA',
        txt: '',
        image: 'https://wallpapers.vip/wp-content/uploads/2019/03/Download-Free-Funny-Dog-Wallpaper.jpg',
        todos: [],
        youTube: '',
    },
    {
        id: utilService.makeId(),
        type: 'txt',
        title: 'Say Hello To: ',
        txt: 'The WORLD!',
        image: '',
        todos: [],
        youTube: '',
    },
    {
        id: utilService.makeId(),
        type: 'txt',
        title: 'I GOT THE POWER!',
        txt: 'OR NOT..',
        image: '',
        todos: [],
        youTube: '',
    }
];

export const NOTES_KEY = 'notes'

function makeNewNote(){
    return {
        id: utilService.makeId(),
        type: '',
        title: '',
        txt: '',
        image: '',
        todos: [],
        youTube: '',
        isPinned: false,
    }
}

//-----------------------------------------------------

function query(){
    var notes = storageService.load(NOTES_KEY)
    if (!notes) {
        notes = notesDB //shold be make notes
    }
    storageService.save(NOTES_KEY, notes) 
    notesDB = notes
    return Promise.resolve(notesDB) 
}

//-----------------------------------------------------

function findNoteById(noteId){
    const notes = notesDB 
    const note = notes.find(currNote => {
        return currNote.id === noteId
    })
    console.log(note,'note service!');
    
    return Promise.resolve(note)
}

//-----------------------------------------------------

function saveNotesDB(notes){
    notesDB = notes
}

//-----------------------------------------------------

export default {
    findNoteById,
    makeNewNote,
    query,
    saveNotesDB,
}