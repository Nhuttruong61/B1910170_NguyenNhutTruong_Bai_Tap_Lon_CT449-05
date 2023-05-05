const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    link_url: {
        type: String,
        required: true,
    },
    movie_name: {
        type: String,
        required: true,
    },
});
module.exports = mongoose.model("Link", postSchema);