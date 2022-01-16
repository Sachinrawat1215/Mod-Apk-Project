const Collection = require('../Schema/dataSchema');

const saveApk = async (request, response) => {
    try {
        const apk = await new Collection(request.body);
        console.log(apk)
        apk.save();
        response.status(200).json("apk saved sucessfully...");
    } catch (error) {
        response.status(500).json(error);
    }
}

const getAllPost = async (request, response) => {
    try {
        let posts = await Collection.find({});
        response.status(200).json(posts);
    } catch (error) {
        response.status(500).json(error);
    }
}

module.exports = {
    setpost: saveApk,
    getall: getAllPost
};