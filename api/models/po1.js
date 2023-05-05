const mongoose = require('mongoose');

const po1Schema = mongoose.Schema({
    name: String,
    comment: String,
    video: String,
});
module.exports = mongoose.model("Po1", po1Schema);