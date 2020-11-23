

"use strict";


/**
 * buildGenericCardFacebookMessenger builds basic cards for Facebook Messenger
 * @param {Array} cardData 
 * @example 
 *  {
 *      "title": "Card Title (required)",
 *      "subtitle": "Card Subtitle (optional)",
 *      "imageUri": "http://imageUrl.com (optional and protocol must be http/https)",
 *      "buttons": [{
 *          "title": "Card Link title (optional)",
 *          "postback": "Text or URL (optional)"
 *      }]
 *  }
 */
const buildGenericCardFacebookMessenger = (cardData) => {

    let buttons = [];
    if(!cardData.title) {
        throw new Error("Parameter 'title' is required");
    }
    if(cardData.buttons && cardData.buttons.length > 0) {
        cardData.buttons.forEach((button) => {
            if(button.title) {
                buttons.push({
                    "text": button.title,
                    "postback": button.postback ? button.postback : ""
                });
            } else {
                throw new Error("Parameter 'title' for the button is required");
            }
        });
    }
    return {
        "platform": "FACEBOOK",
        "card": {
            "title": cardData.title,
            "subtitle": cardData.subtitle ? cardData.subtitle : "",
            "imageUri": cardData.imageUri ? cardData.imageUri : "",
            "buttons": buttons
        }
    }
}

module.exports = {  buildGenericCardFacebookMessenger };
