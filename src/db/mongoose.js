const mongoose = require('mongoose')

const connectionURL = 'mongodb+srv://admin:xepwaR-dukhog-3nahbo@cluster0-cvzeq.mongodb.net/class?retryWrites=true'

if (process.env.NODE_ENV === "production") {
  var connectionURL = process.env.CONNECTION_URL;
} else {
  const { mongo } = require("../config.js");
  var connectionURL = mongo;
}

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
