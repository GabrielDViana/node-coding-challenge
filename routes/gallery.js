var express = require('express');
var router = express.Router();
var axios = require('axios');
const Gallery = require('../models/gallery.js');


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', (req, res) => {
    axios({
        method: 'get',
        url: 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e775418c709ea18b6b0cafd92b4aa7b1&tags=puppy&format=json&nojsoncallback=1',
        responseType: 'application/json'
    }).then(function (response) {
        var responseResume = JSON.parse(response.data);
        var gallery = new Gallery(responseResume.photos.page, responseResume.photos.pages, responseResume.photos.photo)
        res.json({
            gallery: gallery
        });
    })
})
module.exports = router;
