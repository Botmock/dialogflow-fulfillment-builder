

"use strict";

/**
 * buildLinkOutSuggestionActionsOnGoogle builds response for link out suggestions for Actions on Google
 * @param {Object} linkOutSuggestionData 
 * @example
 *  {
 *      "destinationName": "Destination Name (required)",
 *      "uri": "http://Url.com (required)"
 *  }
 */
const buildLinkOutSuggestionActionsOnGoogle = (linkOutSuggestionData) => {
    if(!linkOutSuggestionData.destinationName) {
        throw new Error("Parameter 'destinationName' is required");
    }
    if(!linkOutSuggestionData.uri) {
        throw new Error("Link Out Suggestion Chip url cannot be empty and protocol must be http or https");
    }
    return {
        "platform": "ACTIONS_ON_GOOGLE",
        "linkOutSuggestion": {
            "destinationName": linkOutSuggestionData.destinationName,
            "uri": linkOutSuggestionData.uri
        }
    }
}

module.exports = { buildLinkOutSuggestionActionsOnGoogle };
