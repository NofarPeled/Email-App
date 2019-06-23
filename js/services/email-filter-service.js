'use strict'


function filterByTxt(emails,filter){
    if (!filter.txt) return emails;
    let filteredByTxt = emails.filter(email => {
        return (email.subject.includes(filter.txt)||
        email.body.includes(filter.txt))
    })
    
    return filteredByTxt
}
function filterByRead(emails,filter){
    if(!filter.isRead) return emails
    let filterByRead = emails.filter(email=>{
        return email.isRead
    })
    return filterByRead
}
function filterByUnread(emails,filter){
    if (!filter.isUnread) return emails;
    let filterByUnread = emails.filter(email=>{
        return (!email.isRead)
    })
    return filterByUnread
}
function filterByIsFavorite(emails,filter){
    if(!filter.isFavorite) return emails;
    let filterByIsFavorite = emails.filter(email=>{
        return email.isFavorite 
    })
    return filterByIsFavorite;
}
function filterBySend(emails,filter){
    if(!filter.isSent) return emails;
    let filterBySend = emails.filter(email=>{
        return email.isSent
    })
    return filterBySend
}
function filterByRecived(emails,filter){
    if (!filter.isRecived) return emails
    let filterByRecived = emails.filter(email=>{
        return email.isRecived
    }) 
    return filterByRecived
}

export default {
    filterByTxt,
    filterByRead,
    filterByUnread,
    filterByIsFavorite,
    filterBySend,
    filterByRecived
}