const mongoose = require('mongoose');

const connection = (URL) => {
    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log(`connection sucessfull`);
    }).catch((error) => {
        console.log(`failed to connect due to ${error}`);
    })
}

module.exports = connection;