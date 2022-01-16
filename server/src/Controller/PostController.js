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

const getPost = async (request, response) => {
    console.log(request.params.id);
    try {
        let post = await Collection.findById( request.params.id );
        console.log(post);
        response.status(200).json(post);
    } catch (error) {
        response.status(500).json(error);
    }
}

module.exports = {
    setpost: saveApk,
    getall: getAllPost,
    getpost: getPost,
};