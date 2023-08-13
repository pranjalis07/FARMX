const mongoose = require("mongoose")

const emails = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    role: String
});

module.exports = mongoose.model("Emails", emails)