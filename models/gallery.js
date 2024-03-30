const Photo = require('./photo.js');

class Gallery{
    constructor(page, pages, photoParse) {
        var photoList = [];
        photoParse.forEach((photo) => {
            photoList.push(new Photo(photo.id, 
                photo.owner, 
                photo.secret, 
                photo.server, 
                photo.farm, 
                photo.title))
        });
                            
        this.page = page || null;
        this.pages = pages || null;
        this.photoList = photoList || null;
    }
}
module.exports = Gallery;
