'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose')),
    Schema   = mongoose.Schema

var BookSchema = new Schema({
  name: String,
  description: String,
  pages: Number,
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  active: Boolean
});

export default mongoose.model('Book', BookSchema);
