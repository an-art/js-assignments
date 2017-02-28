'use strict';

/********************************************************************************************
 *                                                                                          *
 * Plese read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String  *
 *                                                                                          *
 ********************************************************************************************/




function concatenateStrings(value1, value2) {
    return value1 + value2;
}

function getStringLength(value) {
    return value.length;
}

function getStringFromTemplate(firstName, lastName) {
    return `Hello, ${firstName} ${lastName}!`
}

function extractNameFromTemplate(value) {
    return value.slice(7, -1);
}

function getFirstChar(value) {
    return value.charAt(0);
}

function removeLeadingAndTrailingWhitespaces(value) {
    return value.trim();
}

function repeatString(value, count) {
    return value.repeat(count);
}

function removeFirstOccurrences(str, value) {
    return str.replace(value, '');
}

function unbracketTag(str) {
    return str.slice(1, -1);
}

function convertToUpperCase(str) {
    return str.toUpperCase();
}

function extractEmails(str) {
    return str.split(';');
}

function getRectangleString(width, height) {
    let h = '\u2502'+' '.repeat(width-2)+'\u2502'+'\n';
    return '\u250c'+'\u2500'.repeat(width-2)+'\u2510'+'\n'+h.repeat(height-2)+'\u2514'+'\u2500'.repeat(width-2)+'\u2518'+'\n';
}

function encodeToRot13(str) {
    return str.replace(/[A-z]/g, function(c){
        return String.fromCharCode((c<='Z' ? 90 : 122)>=(c=c.charCodeAt(0)+13) ? c:c-26);
    });
}

function isString(value) {
    if (Object.prototype.toString.call(value).slice(8, -1).toLowerCase()==='string') return true;
    else return false;
}

function getCardId(value) {
    let cards = ['A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'];
    return cards.indexOf(value);
}


module.exports = {
    concatenateStrings: concatenateStrings,
    getStringLength: getStringLength,
    getStringFromTemplate: getStringFromTemplate,
    extractNameFromTemplate: extractNameFromTemplate,
    getFirstChar: getFirstChar,
    removeLeadingAndTrailingWhitespaces: removeLeadingAndTrailingWhitespaces,
    repeatString: repeatString,
    removeFirstOccurrences: removeFirstOccurrences,
    unbracketTag: unbracketTag,
    convertToUpperCase: convertToUpperCase,
    extractEmails: extractEmails,
    getRectangleString: getRectangleString,
    encodeToRot13: encodeToRot13,
    isString: isString,
    getCardId: getCardId
};
