const express = require("express");
const Book = require("./book.model");
const { postABook } = require("./book.controller");
const router = express.Router();

// frotend =>
// post = when submit something frontend to db
// get = when get something back from db
// put/patch = when edit or update something
// delete = when delete something

// post a book
router.post("/create-book", postABook);

// get all books

module.exports = router;
