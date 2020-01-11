const mongoose = require('mongoose');
const {ObjectId} = mongoose.Types

const Materials = new mongoose.Schema({
  matricNumber: {
    required: true,
    type: String,
  },
   level: {
    type: ObjectId,
    ref:"levels"
  },
  department:{
      type:ObjectId,
      ref:"department"
  },
  password:{
      type:String,
      required:true
  }
});

module.exports = mongoose.model('Materials', Materials);