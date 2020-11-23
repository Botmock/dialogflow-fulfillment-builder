

"use strict";

const itemsHelper = require("../helpers/items-helper");

/**
 * buildCarouselCardActionsOnGoogle builds carousel cards for Actions on Google
 * @param {Array} carouselCardItems 
 * @example
 *  [
 *      {
 *          "infoKey": "itemOne (required)",
 *          "title": "Option One Title (required)",
 *          "description": "Option One Description (optional)",
 *          "synonyms": [
 *              "thing one",
 *              "object one"
 *          ],
 *          "imageUri": "http://imageOneUrl.com (optional)",
 *          "imageAccessibilityText": "Image description for screen readers (required only if imageUri given)"
 *      },
 *      {
 *          "infoKey": "itemTwo (required)",
 *          "title": "Option Two Title (required)",
 *          "description": "Option Two Description (optional)",
 *          "synonyms": [
 *              "thing two",
 *              "object two"
 *          ],
 *          "imageUri": "http://imageTwoUrl.com (optional)",
 *          "imageAccessibilityText": "Image description for screen readers (required only if imageUri given)"
 *      }
 *  ]
 */
const buildCarouselCardActionsOnGoogle = (carouselCardItems) => {
    let items = [];
    if(carouselCardItems.length < 2) {
        throw new Error("Carousel Card can have minimum 2 and maximum 10 items");
    }
    items = itemsHelper.buildItems(carouselCardItems);
    return {
        "platform": "ACTIONS_ON_GOOGLE",
        "carouselSelect": {
            "items": items
        }
    }
}

module.exports = { buildCarouselCardActionsOnGoogle };
