var express = require('express');
var router = express.Router();
var axios = require('axios');
const convert = require("xml-js");
const Feed = require('../models/Feed.js');

function nativeType(value) {
    var nValue = Number(value);
    if (!isNaN(nValue)) {
        return nValue;
    }
    var bValue = value.toLowerCase();
    if (bValue === 'true') {
        return true;
    } else if (bValue === 'false') {
        return false;
    }
    return value;
}

var removeJsonTextAttribute = function (value, parentElement) {
    try {
        var keyNo = Object.keys(parentElement._parent).length;
        var keyName = Object.keys(parentElement._parent)[keyNo - 1];
        parentElement._parent[keyName] = nativeType(value);
    } catch (e) { }
}

var options = {
    compact: true,
    trim: true,
    ignoreDeclaration: true,
    ignoreInstruction: true,
    ignoreAttributes: true,
    ignoreComment: true,
    ignoreCdata: true,
    ignoreDoctype: true,
    textFn: removeJsonTextAttribute
};
router.get('/', (req, res) => {
    axios({
        method: 'get',
        url: 'https://www.flickr.com/services/feeds/photos_public.gne',
        responseType: 'application/xml'
    }).then(function (response) {
        var responseResume = JSON.parse(
            convert.xml2json(response.data, options)
        );
        var entryList = [];

        responseResume.feed.entry.forEach((entry) => {
            entryList.push(new Feed(entry))
        });
        res.json({
            title: responseResume.feed.title,
            entry: entryList
        });
    })
})


module.exports = router;
