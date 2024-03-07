const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  let ob = {
    username : req.body.username,
    password : req.body.password
  }
  users.push(ob);
  return res.status(300).json( {message: `Customer successfully regitered, now you can login`});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
  return res.status(300).send(JSON.stringify(books));
});

// Get book details based on ISBN
public_users.get(`/isbn/:isbn`,function (req, res) {
  //Write your code here
  return res.status(300).send(JSON.stringify(books[req.params.isbn]));
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  return res.status(300).json(
    books[1].author === req.params.author ? books[1] : books[2].author === req.params.author ? books[2] : books[3].author === req.params.author ? books[3] : books[4].author === req.params.author ? books[4] : books[5].author === req.params.author ? books[5] : books[6].author === req.params.author ? books[6] : books[7].author === req.params.author ? books[7] : books[8].author === req.params.author ? books[8] : books[9].author === req.params.author ? books[9] : books[10].author === req.params.author ? books[10] : ""
  )
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  return res.status(300).json(
    books[1].title === req.params.title ? books[1] : books[2].title === req.params.title ? books[2] : books[3].title === req.params.title ? books[3] : books[4].title === req.params.title ? books[4] : books[5].title === req.params.title ? books[5] : books[6].title === req.params.title ? books[6] : books[7].title === req.params.title ? books[7] : books[8].title === req.params.title ? books[8] : books[9].title === req.params.title ? books[9] : books[10].title === req.params.title ? books[10] : ""
  );
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).send(JSON.stringify(books[req.params.isbn].reviews));
});

module.exports.general = public_users;
