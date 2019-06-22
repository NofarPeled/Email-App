'use strict'

import {utilService} from './util-service.js'
import storageService from './storage-service.js'

let emailsDB = [];

export const EMAILS_KEY = 'emails'

function makeNewEmail(subject,body,sender,reciver){
    return {
        id: utilService.makeId(),
        sender,
        reciver,
        subject,
        body,
        isRead: false,
        recivedAt:utilService.getDate(),
        timeCreated: new Date() 
    }
}

//-----------------------------------------------------

//THE REAL MAKE NEW EMAILS FUNCTION
// function makeNewEmails(subject,body,sender,reciver){
//     var emails = []
//     for (var i = 0; i < 10; i++){
//         var email = makeNewEmail(subject,body,sender,reciver)
//         emails.push(email)
//     }
//     return emails
// }

//-----------------------------------------------------

function makeNewEmails(){
    var emails = []
    var email = makeNewEmail('No leather in the office, starting tomorrow','HR just notified me that we have a new employee who starts tomorrow that is allergic to leather. To protect his health and productivity, all leather will be prohibited from the office. This includes bags, shoes, pants, belts, and any other leather accessories. Please leave your leather at home! Thanks for your support.', 'Bos@Gmail.Com', 'Nofar@Gmail.Com') 
    emails.push(email)
    var email = makeNewEmail('New office policy',' This has been a particularly bad flu season, and we’re concerned about how disease affects productivity. After much discussion and review of recent research, leadership has decided to issue an office policy against sneezing. If you need to sneeze, please go to the bathroom to avoid spreading germs and wash your hands after the sneeze. Do not sneeze at your desk! This new policy starts tomorrow.','Maya@Gmail.Com', 'Nofar@Gmail.Com')
    emails.push(email)
    var email = makeNewEmail('New office policy','This has been a particularly bad flu season, and we’re concerned about how disease affects productivity. After much discussion and review of recent research, leadership has decided to issue an office policy against sneezing. If you need to sneeze, please go to the bathroom to avoid spreading germs and wash your hands after the sneeze. Do not sneeze at your desk! This new policy starts tomorrow.','Naama@Gmail.Com', 'Nofar@Gmail.Com') 
    emails.push(email)
    var email = makeNewEmail('Hallway to be nap area','To attract top tech talent and stay competitive in recruiting, company leadership has decided to convert the hallway to a nap area as a perk for employees. You’re welcome to enjoy 20 min-1 hour power naps in the nap area any time of day (pillows provided). Respect your peers by remaining silent in the hallway — no phone calls, conversations, or meetings, please.','Tzur@Gmail.Com', 'Nofar@Gmail.Com') 
    emails.push(email)
    var email = makeNewEmail('Yodeling convention',' FYI, our office manager informed me this morning that there will be a yodeling convention happening tomorrow on the three floors below us. Please bring earplugs or headphones if the noise will bother you.','Nadav@Gmail.Com', 'Nofar@Gmail.Com') 
    emails.push(email)
    var email = makeNewEmail('Improve mental health by switching to tea','In light of research about the damaging effects of caffeine on mental health, we’ve decided to switch our coffee to herbal tea. Starting tomorrow, our office manager will brew herbal and black teas, available for free in the micro-kitchen. I encourage you to choose the decaffeinated option :) Coffee will no longer be offered.','Neta@Gmail.Com', 'Nofar@Gmail.Com')  
    emails.push(email)
    var email = makeNewEmail('Company swag for summer!','In celebration of spring, we’re giving out company-branded swimsuits! Come to my desk tomorrow to pick up logo-ed trunks and bikinis.','Violet@Gmail.Com', 'Nofar@Gmail.Com')  
    emails.push(email)
    var email = makeNewEmail('Transfer to new company office','It’s important to our COO to support developing economies and facilitate open borders, so we have decided to open an office in Bali! Construction of the office will begin next week. The new South Pacific facilities will include beachfront conference rooms, high-end video conferencing technology, an on-staff masseuse, and local residences for employees. Please notify me if you’d like to be added to the transfer list.','Tamir@Gmail.Com', 'Nofar@Gmail.Com')  
    emails.push(email)
    var email = makeNewEmail('Camera crews starting tomorrow','I’m thrilled to announce that our office was chosen to be part of a reality show! Starting tomorrow, you’ll notice camera crews setting up and wandering around the office. The name/premise of the reality show is secret, but you don’t need to do anything special. Just behave normally and continue business as usual!','DontKnow@Gmail.Com', 'Nofar@Gmail.Com')  
    emails.push(email)
    var email = makeNewEmail('Scent vendors','Our office managers have decided to experiment with new odors for the office. Tomorrow, a vendor will bring samples of new scents and perfumes that we’re considering. Please stop by my desk to test out and vote on your favorites.','SomeOneElse@Gmail.Com', 'Nofar@Gmail.Com')  
    emails.push(email)
    return emails
}
//-----------------------------------------------------

function query(subject,body,sender,reciver) {
    var emails = storageService.load(EMAILS_KEY)
    if (!emails) {
        emails = makeNewEmails(subject,body,sender,reciver);
    } 
    storageService.save(EMAILS_KEY, emails)    
    emailsDB  = emails    
    return Promise.resolve(emailsDB );
}

//-----------------------------------------------------

function findEmailById(emailId){
    const emails = emailsDB
    const email = emails.find(currEmail => {
        return currEmail.id === emailId
    })
    return Promise.resolve(email)
}

//-----------------------------------------------------

function saveDB(emails){
    emailsDB = emails
}
//-----------------------------------------------------

export default {
    makeNewEmail,
    query,
    findEmailById,
    saveDB
}