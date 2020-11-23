

"use strict";

const itemsHelper = require("../helpers/items-helper");

/**
 * buildListActionsOnGoogle builds lists for Actions on Google
 * @param {Object} listData 
 * @example
 * {
 *      "title": "List title (optional)",
 *      "items": 
 *      [
 *          {
 *              "title": "Item One (required)",
 *              "infoKey": "itemOne (required)",
 *              "description": "Item One Description (optional)",
 *              "synonyms": ["thing one", "object one"],
 *              "imageUri": "http://imageOneUrl.com (optional)",
 *              "imageAccessibilityText": "Image description for screen readers (required only if imageUri given)"
 *          },
 *          {
 *              "title": "Item Two (required)",
 *              "infoKey": "itemTwo (required)",
 *              "description": "Item Two Description (optional)",
 *              "synonyms": ["thing two", "object two"],
 *              "imageUri": "http://imageTwoUrl.com (optional)",
 *              "imageAccessibilityText": "Image description for screen readers (required only if imageUri given)"
 *          }
 *      ]
 * }
 */
const buildListActionsOnGoogle = (listData) => {
    let items = [];
    if(listData.items.length < 2) {
        throw new Error("List Card can have minimum 2 and maximum 30 items");
    }
    items = itemsHelper.buildItems(listData.items);
    return {
        "platform": "ACTIONS_ON_GOOGLE",
        "listSelect": {
            "title": listData.title ? listData.title : "",
            "items": items
        }
    }
}

module.exports = { buildListActionsOnGoogle };
