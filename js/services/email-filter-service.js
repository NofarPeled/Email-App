'use strict'

function filterEmails(emails,filter){
    console.log(filter,'filter!');

    if (!filter) return emails
    const filteredByTxt = (!filter.txt) ? emails : filterByTxt(emails,filter.txt)
    console.log(filteredByTxt);
    


    let filteredEmails = null
    if (filter.isRead) filteredEmails = filterByRead(filteredByTxt)
    else if (filter.isUnread) filteredEmails = filterByUnread(filteredByTxt)
    else if (filter.isFavorite) filteredEmails = filterByIsFavorite(filteredByTxt)
    else if (filter.isRecived) filteredEmails = filterByRecived(filteredByTxt)
    else if (filter.isSent) filteredEmails = filterBySend(filteredByTxt)
    else filteredEmails = filteredByTxt;
    console.log(filteredEmails,'filteredEmails');
    
    return filteredEmails

}

function filterByTxt(emails,txt){

    const filteredByTxt = emails.filter(email => {
        return email.subject.includes(txt)||
        email.body.includes(txt)
    })
    
    return filteredByTxt
}

function filterByRead(emails){
    console.log('in filterByRead', emails);
    
    const filterByRead = emails.filter(email=>{
        return email.isRead
    })
    return filterByRead
}
function filterByUnread(emails){
    console.log('filterByUnread',emails);
    
    const filterByUnread = emails.filter(email=>{
        return (!email.isRead)
    })
    return filterByUnread
}
function filterByIsFavorite(emails){
    console.log('filterByIsFavorite',emails);
    
    const filterByIsFavorite = emails.filter(email=>{
        return email.isFavorite 
    })
    return filterByIsFavorite;
}
function filterBySend(emails){
    console.log('filterBySend',emails);
    
    const filterBySend = emails.filter(email=>{
        return email.isSent
    })
    return filterBySend
}
function filterByRecived(emails){
    console.log('in filterByRecived', emails);
    
    const filterByRecived = emails.filter(email=>{
        return email.isRecived
    }) 
    return filterByRecived
}

export default {
    filterEmails
}
