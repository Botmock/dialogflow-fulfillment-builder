/**
 * Copyright 2020 Quantiphi, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
