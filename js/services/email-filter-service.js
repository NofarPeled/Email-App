'use strict'

function filterEmails(emails, filter) {
    console.log('got in filterEmails', filter);
    debugger;
    if (!filter.txt && !filter.type) return emails
    const filteredByTxt = (!filter.txt) ? emails : filterByTxt(emails, filter.txt)
    let filteredEmails = null
    if (filter.type.isRead) filteredEmails = filterByRead(filteredByTxt)
    else if (filter.type.isUnread) filteredEmails = filterByUnread(filteredByTxt)
    else if (filter.type.isFavorite) filteredEmails = filterByIsFavorite(filteredByTxt)
    else if (filter.type.isRecived) filteredEmails = filterByRecived(filteredByTxt)
    else if (filter.type.isSent) filteredEmails = filterBySend(filteredByTxt)
    else filteredEmails = filteredByTxt;
    return filteredEmails
}

function filterByTxt(emails, txt) {
    const filteredByTxt = emails.filter(email => {
        return email.subject.includes(txt) ||
            email.body.includes(txt)
    })

    return filteredByTxt
}

function filterByRead(emails) {
    const filterByRead = emails.filter(email => {
        return email.isRead
    })
    return filterByRead
}
function filterByUnread(emails) {
    const filterByUnread = emails.filter(email => {
        return (!email.isRead)
    })
    return filterByUnread
}
function filterByIsFavorite(emails) {
    const filterByIsFavorite = emails.filter(email => {
        return email.isFavorite
    })
    return filterByIsFavorite;
}
function filterBySend(emails) {
    const filterBySend = emails.filter(email => {
        return email.isSent
    })
    return filterBySend
}
function filterByRecived(emails) {
    const filterByRecived = emails.filter(email => {
        return email.isRecived
    })
    return filterByRecived
}

export default {
    filterEmails
}
