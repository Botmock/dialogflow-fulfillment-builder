

"use strict";

const imagesBuilder = require("./images-builder");

/**
 * buildBrowseCarouselCardActionsOnGoogle builds browse carousel cards for Actions on Google
 * @param {Array} browseCarouselCardItems
 * @example
 *  [
 *      {
 *          "title": "Option one title (required)",
 *          "url": "https://optionOneUrl (required)",
 *          "urlTypeHint": "AMP_CONTENT (optional)",
 *          "description": "Option one description (optional)",
 *          "imageUri": "http://imageOneUrl.com (optional)",
 *          "imageAccessibilityText": "Image description for screen readers (required only if imageUri given)",
 *          "footer": "Option one footer (optional)"
 *      },
 *      {
 *          "title": "Option two title (required)",
 *          "url": "https://optionTwoUrl (required)",
 *          "urlTypeHint": "AMP_CONTENT (optional)",
 *          "description": "Option two description (optional)",
 *          "imageUri": "http://imageTwoUrl.com (optional)",
 *          "imageAccessibilityText": "Image description for screen readers (required only if imageUri given)",
 *          "footer": "Option two footer (optional)"
 *      }
 *  ] 
 */
const buildBrowseCarouselCardActionsOnGoogle = (browseCarouselCardItems) => {
    let items = [];
    if(browseCarouselCardItems.length < 2) {
        throw new Error("Browse Carousel Card can have minimum 2 and maximum 10 items");
    }
    browseCarouselCardItems.forEach((item) => {
        if(!item.title) {
            throw new Error("Parameter 'title' is required");
        }
        if(!item.url) {
            throw new Error("Browse Carousel Card item URL to the web content cannot be empty and protocol must be http or https");
        }
        items.push({
            "openUriAction": {
                "url": item.url,
                "urlTypeHint": item.urlTypeHint ? item.urlTypeHint : ""
            },
            "title": item.title,
            "description": item.description ? item.description : "",
            "image": imagesBuilder.buildImageActionsOnGoogle(item),
            "footer": item.footer ? item.footer : ""
        });
    });
    return {
        "platform": "ACTIONS_ON_GOOGLE",
        "browseCarouselCard": {
            "items": items
        }
    }
}

module.exports = { buildBrowseCarouselCardActionsOnGoogle };
