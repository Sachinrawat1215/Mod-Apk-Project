const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
        // unique: true
    },
    image: {
        type: String,
        required: true
    },
    version: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    publisher: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
        // unique: true
    },
    updateddate: {
        type: String,
        required: true,
        // unique: true
    },
    tablecontent: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
        // unique: true
    },
    // relatedapp1: {
    //     type: String,
    //     required: true,
    //     // unique: true
    // },
    // relatedapp2: {
    //     type: String,
    //     required: true,
    //     // unique: true
    // },
    // relatedapp3: {
    //     type: String,
    //     required: true,
    //     // unique: true
    // },
    summary: {
        type: String,
        required: true,
        // unique: true
    },
    downloadlink: {
        type: String,
        required: true,
        // unique: true
    }
})


const Post = mongoose.model("appdata", dataSchema);

module.exports = Post;