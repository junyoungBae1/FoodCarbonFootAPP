const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type : String,
        required : true,
        trim : true,
        unique : true,
    },
    password: {
        type :String,
        required :true,
    },
    username: {
        type : String,
        required : true,
    },
    phonenum: {
        type : String,
        required :true,
    },
    token: {
        type: String,
    },
    score: {
        type: Number,
        default: 0,
    },

  });

module.exports = mongoose.model("User", userSchema);