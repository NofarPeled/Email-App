'use strict'

import {utilService} from './util-service.js'

function makeNewEmail(subject,body){
    const email = {
        id: utilService.makeId(),
        subject,
        body,
        isRead: false,
        sentAt:new Date()
    }
    return Promise.resolve(email);
}


export default {
    makeNewEmail,

}