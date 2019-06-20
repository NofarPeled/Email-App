'use strict'

function save(key, value) {
    var strValue = JSON.stringify(value);
    localStorage.setItem(key, strValue);
}

//---------------------------------------------------

function load(key) {
    return JSON.parse(localStorage.getItem(key))
}

//----------------------------------------------------

export default {
    save,
    load    
}