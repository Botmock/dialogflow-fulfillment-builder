

"use strict";

const imagesBuilder = require("../response-builder/images-builder");

/**
 * buildItems validates individual items and builds items array accordingly
 * @param {Array} items an array of carousel-card or list objects
 */
const buildItems = (items) => {
    let builtItems = [];
    items.forEach((item) => {
        let synonyms = [];
        if(!item.title) {
            throw new Error("Parameter 'title' is required");
        }
        if(!item.infoKey) {
            throw new Error(`Parameter 'infoKey' for item '${item.title}' is required and should be unique`);
        }
        if(item.synonyms && item.synonyms.length > 0) {
            item.synonyms.forEach((synonym) => {
                if(synonym.length) {
                    synonyms.push(synonym);
                }
            });
        }
        builtItems.push({
            "info": {
                "key": item.infoKey,
                "synonyms": synonyms
            },
            "title": item.title,
            "description": item.description ? item.description : "",
            "image": imagesBuilder.buildImageActionsOnGoogle(item)
        });
    });
    return builtItems;
};

module.exports = { buildItems };
