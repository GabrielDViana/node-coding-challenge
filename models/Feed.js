var HTMLParser = require('node-html-parser');

function isEmptyObject(obj) {
    return !Object.keys(obj).length;
}
  

class Feed {
    constructor(entry) {

        var filterContent = HTMLParser.parse(entry.content);

        this.title = isEmptyObject(entry.title) ? "" : entry.title || null;
        this.id = entry.id || null;
        this.published = entry.published || null;
        this.date_taken = entry["dc:date.Taken"] || null;
        this.content = filterContent.querySelector("img").getAttribute('src') || null;
        this.author =  {
            name: entry.author.name || null,
            uri: entry.author.uri || null,
            id: entry.author["flickr:nsid"] || null,
            icon: entry.author["flickr:buddyicon"] || null
        };
    }
}

module.exports = Feed;
