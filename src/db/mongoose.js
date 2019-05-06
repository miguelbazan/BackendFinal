const mongoose = require('mongoose')

const connectionURL = 'mongodb+srv://admin:xepwaR-dukhog-3nahbo@cluster0-cvzeq.mongodb.net/class?retryWrites=true'


mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
