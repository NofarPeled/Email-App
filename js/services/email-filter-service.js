'use strict'

function filterEmails(emails,filter){
    if (!filter) return emails
    let filteredByTxt = (!filter.txt) ? emails : filterByTxt(emails,filter)

    let filteredEmails;
    if (filter.inbox) filteredEmails = filteredByTxt
    if (filter.isRead) filteredEmails = filterByRead(filteredByTxt)
    if (filter.isUnread) filteredEmails = filterByUnread(filteredByTxt)
    if (filter.isFavorite) filteredEmails = filterByIsFavorite(filteredByTxt)
    if (filter.isRecived) filteredEmails = filterByRecived(filteredByTxt)
    if (filter.isSent) filteredEmails = filterBySend(filteredByTxt)


    return filteredEmails

}

function filterByTxt(emails,filter){
    if (!filter.txt) return emails;
    let filteredByTxt = emails.filter(email => {
        return (email.subject.includes(filter.txt)||
        email.body.includes(filter.txt))
    })
    
    return filteredByTxt
}

function filterByRead(emails){
    let filterByRead = emails.filter(email=>{
        return email.isRead
    })
    return filterByRead
}
function filterByUnread(emails){
    let filterByUnread = emails.filter(email=>{
        return (!email.isRead)
    })
    return filterByUnread
}
function filterByIsFavorite(emails){
    let filterByIsFavorite = emails.filter(email=>{
        return email.isFavorite 
    })
    return filterByIsFavorite;
}
function filterBySend(emails){
    let filterBySend = emails.filter(email=>{
        return email.isSent
    })
    return filterBySend
}
function filterByRecived(emails){
    let filterByRecived = emails.filter(email=>{
        return email.isRecived
    }) 
    return filterByRecived
}

export default {
    filterEmails
}
