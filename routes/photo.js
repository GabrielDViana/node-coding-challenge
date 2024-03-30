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
        url: 'https://www.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=e775418c709ea18b6b0cafd92b4aa7b1&photo_id=' 
            + req.query.photoid + '&format=json&nojsoncallback=1',
        responseType: 'application/json'
    }).then(function (response) {
        var responseData =  JSON.parse(response.data);
        const photoData = filterSource(responseData);
        res.json({
            source: photoData
        });
    })
})
function filterSource(data){
    return data.sizes.size.filter((item) => item.label === "Small")[0].source;
}
module.exports = router;



