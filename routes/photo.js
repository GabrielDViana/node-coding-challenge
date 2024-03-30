var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', (req, res) => {
    axios({
        method: 'get',
        url: 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e775418c709ea18b6b0cafd92b4aa7b1&tags=cat&format=json&nojsoncallback=1',
        responseType: 'application/json'
    }).then(function (response) {
        res.json({
            response: JSON.parse(response.data)
        });
    })
})
module.exports = router;



