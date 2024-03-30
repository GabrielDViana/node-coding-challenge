class Photo {
    constructor(id, owner, secret, server, farm, title) {
        this.id = id || null;
        this.owner = owner || null;
        this.secret = secret || null;
        this.server = server || null;
        this.source = farm || null;
        this.title = title || null;
    }
}
module.exports = Photo;



