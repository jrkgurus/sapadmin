var express = require('express');
var router = express.Router();

const questions = require('../models/questions')
//get all ids
router.get("/ids/:mid", async (req, res) => { 
    console.log(req.params.mid)
    const result= await questions.find({module:req.params.mid},"_id");
    console.log(result)
    res.send(result);
    }); 
/*router.get("/ids/:mid", async (req, res) => { 
      console.log(req.params.mid)
      const result= await questions.find({},"_id");
      console.log(result)
      res.send(result);
      }); 
*/
// Get All Route
router.get("/", async (req, res) => { 

const result= await questions.find();
res.send(result);
}); 
// Get One Routea
router.get("/:id", async (req, res) => {
  // Rest of the code will go here
  const result= await questions.findOne({_id:req.params.id});
res.send(result);
}); 
// Create One Route
router.post("/create", async (req, res) => {
  const newQues = new questions({Q:req.body.Q,OPS:req.body.OPS, ANS:req.body.ANS, module:req.body.module})
  console.log(newQues)
  const result = await newQues.save()
  res.send(result);
});
// Edit One Route PUT version
router.put("/:id", async (req, res) => {

  // Rest of the code will go here
  const result = await questions.findOneAndUpdate({_id:req.params.id},{Q:req.body.Q,OPS:req.body.OPS, ANS:req.body.ANS, module:req.body.module});
res.send(result);
});
// Edit One Route PATCH version
router.patch("/:id", async (req, res) => {
  // Rest of the code will go here

});
  // Delete One Route
router.delete("/:id", async (req, res) => {
  // Rest of the code will go here
  const result = await questions.deleteOne({_id:req.params.id});
res.send(result);
});

module.exports = router
