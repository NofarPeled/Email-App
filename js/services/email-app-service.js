'use strict'

import {utilService} from './util-service.js'
import storageService from './storage-service.js'

let emailsDB = [];

const EMAILS_KEY = 'emails'
function makeNewEmail(subject,body){
    return {
        id: utilService.makeId(),
        subject,
        body,
        isRead: false,
        recivedAt:utilService.getDate()
    }
}

//-----------------------------------------------------

function makeNewEmails(subject,body){
    var emails = []
    for (var i = 0; i < 10; i++){
        var email = makeNewEmail(subject,body)
        emails.push(email)
    }
    return emails
}

//-----------------------------------------------------

function query(subject,body) {
    var emails = storageService.load(EMAILS_KEY)
    if (!emails) {
        emails = makeNewEmails(subject,body);
    } 
    storageService.save(EMAILS_KEY, emails)
    console.log('emails before promise',emails);
    
    emailsDB  = emails    
    return Promise.resolve(emailsDB );
}

//-----------------------------------------------------

export default {
    makeNewEmail,
    query
}