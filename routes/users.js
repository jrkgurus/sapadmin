var express = require('express');
var router = express.Router();

const users = require('../models/users')

// Get All Route
router.get("/", async (req, res) => { 

const result= await users.find();
res.send(result);
}); 
// Get One Routea
router.get("/:id", async (req, res) => {
  // Rest of the code will go here
}); 
// Create One Route
router.post("/", async (req, res) => {
  const newAccount = new users({user:req.body.user,pass:req.body.pass})
  console.log(newAccount)
  const result = await newAccount.save()
  res.send(result);
});
// Edit One Route PUT version
router.put("/:id", async (req, res) => {
  // Rest of the code will go here
});
// Edit One Route PATCH version
router.patch("/:id", async (req, res) => {
  // Rest of the code will go here
});
  // Delete One Route
router.delete("/:id", async (req, res) => {
  // Rest of the code will go here
  const result = await users.deleteOne({_id:req.params.id});
res.send(result);
});

module.exports = router
