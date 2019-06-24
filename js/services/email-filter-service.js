'use strict'

function filterEmails(emails, filter) {
    if (!filter.txt && !filter.type) return emails

    const filteredByTxt = (!filter.txt) ? emails :  filterByTxt(emails, filter.txt)

    let filteredEmails = null
    if (!filter.type) filteredEmails = filteredByTxt;
    else if (filter.type.isRead) filteredEmails = filterByRead(filteredByTxt)
    else if (filter.type.isUnread) filteredEmails = filterByUnread(filteredByTxt)
    else if (filter.type.isFavorite) filteredEmails = filterByIsFavorite(filteredByTxt)
    else if (filter.type.isRecived) filteredEmails = filterByRecived(filteredByTxt)
    else if (filter.type.isSent) filteredEmails = filterBySend(filteredByTxt)
    else filteredEmails = filteredByTxt;

    return filteredEmails
}

//-----------------------------------------------------

function filterByTxt(emails, txt) {
    console.log(emails,'emails',txt,'txt');
    
   return emails.filter(email => {

        return email.subject.includes(txt) ||
            email.body.includes(txt)
    })

}

//-----------------------------------------------------

function filterByRead(emails) {

    return emails.filter(email => {

        return email.isRead
    })

}

//-----------------------------------------------------

function filterByUnread(emails) {

    return emails.filter(email => {

        return (!email.isRead)
    })

}

//-----------------------------------------------------

function filterByIsFavorite(emails) {

    return emails.filter(email => {

        return email.isFavorite
    })
}

//-----------------------------------------------------

function filterBySend(emails) {

    return emails.filter(email => {

        return email.isSent

    })

}

//-----------------------------------------------------

function filterByRecived(emails) {

    return emails.filter(email => {

        return email.isRecived
    })

}

//-----------------------------------------------------

export default {
    filterEmails
}
