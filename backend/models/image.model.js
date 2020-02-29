const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imageSchema = new Schema({
    imagelink:{
        type: String
    },
}, {
    timestamps: true
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;