

"use strict";

/**
 * buildSimpleResponseActionsOnGoogle builds response for simple response for Actions on Google
 * @param {String} textToSpeech 
 * @param {String} displayText 
 */
const buildSimpleResponseActionsOnGoogle = (textToSpeech, displayText) => {
    if(!textToSpeech) {
        throw new Error("Parameter 'textToSpeech' is required");
    }
    return {
        "platform": "ACTIONS_ON_GOOGLE",
        "simpleResponses": {
            "simpleResponses": [
                {
                    "textToSpeech": textToSpeech,
                    "displayText": displayText ? displayText : textToSpeech
                }
            ]
        }
    }
}

const buildSimpleResponseFacebookMessenger = (textToSpeech, displayText) => {
    if(!textToSpeech) {
        throw new Error("Parameter 'textToSpeech' is required");
    }
    return {
        "platform": "FACEBOOK",
        "text": {
            "text": [textToSpeech]
       } 
    }
}

const buildSimpleResponseTEXT = (textToSpeech, displayText) => {
    if(!textToSpeech) {
        throw new Error("Parameter 'textToSpeech' is required");
    }
    return {
        "text": {
             "text": [
                textToSpeech,
            ]
        } 
    }
}

module.exports = { buildSimpleResponseActionsOnGoogle, buildSimpleResponseFacebookMessenger, buildSimpleResponseTEXT};
