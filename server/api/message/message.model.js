'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose')),
    Schema   = mongoose.Schema

var MessageSchema = new Schema({
  title: String,
  text: String,
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  recipient: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  creatorBook: {
    type: Schema.Types.ObjectId,
    ref: 'Book'
  },
  recipientBook: {
    type: Schema.Types.ObjectId,
    ref: 'Book'
  }
});

export default mongoose.model('Message', MessageSchema);
