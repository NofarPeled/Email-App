'use strict'

import {utilService} from './util-service.js'
import storageService from './storage-service.js'

let emailsDB = [];

export const EMAILS_KEY = 'emails'

function makeNewEmail(subject,body,sender){
    return {
        id: utilService.makeId(),
        sender,
        subject,
        body,
        isRead: false,
        recivedAt:utilService.getDate()
    }
}

//-----------------------------------------------------

function makeNewEmails(subject,body,sender){
    var emails = []
    for (var i = 0; i < 10; i++){
        var email = makeNewEmail(subject,body,sender)
        emails.push(email)
    }
    return emails
}

//-----------------------------------------------------

function query(subject,body,sender) {
    var emails = storageService.load(EMAILS_KEY)
    if (!emails) {
        emails = makeNewEmails(subject,body,sender);
    } 
    storageService.save(EMAILS_KEY, emails)    
    emailsDB  = emails    
    return Promise.resolve(emailsDB );
}

//-----------------------------------------------------

function findEmailById(emails,emailsId){
    const email = emails.find(email=>{
        return email.id === emailsId
    })
    return Promise.resolve(email)

}

//-----------------------------------------------------

export default {
    makeNewEmail,
    query,
    findEmailById
}