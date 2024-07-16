const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  name:String,
  email:String,
  password:String
})

const MovieModel = mongoose.model("users",MovieSchema)
module.exports = MovieModel