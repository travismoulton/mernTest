const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  published_date: {
    type: Date,
  },
  publisher: {
    type: String,
  },
  updated_date: {
    type: Date,
    // I added the parenthisis, but I think they were missing.
    default: Date.now(),
  },
});

module.exports = Book = mongoose.model("book", BookSchema);
