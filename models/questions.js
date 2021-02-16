const mongoose = require('mongoose');
  const { Schema } = mongoose;

  const quesSchema = new Schema({
    Q:String,
    OPS:Array,
    ANS: String,
    })

module.exports=mongoose.model('questions',quesSchema);