const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

const isValid = (username)=>{ //returns boolean
//write code to check is the username is valid
  for(let i = 0 ; i < users.length; i++) {
    if(users[i].username == username) {
      return false;
    }
    return true;
  }
}

const authenticatedUser = (username,password)=>{ //returns boolean
//write code to check if username and password match the one we have in records.
    if(username == users.username && password == users.password) {
      return true;
    }else {
      return false;
    }
}

//only registered users can login
regd_users.post("/login", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Customer successfully logged in"}
  );
});

// Add a book review
regd_users.put("/review/:isbn", (req, res) => {
  //Write your code here
  return res.status(300).send("Review added for book with isbn " + req.params.isbn);
});

regd_users.delete("/review/:isbn", (req, res) => { 
    res.send("review deleted for book isbn " + req.params.isbn);
})

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
