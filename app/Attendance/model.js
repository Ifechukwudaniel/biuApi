const mongoose = require('mongoose');
const {ObjectId} = mongoose.Types
const configModel = require('../utils/configModel')

const Attendance = new mongoose.Schema({
  date:{
      type:Date,
      default:Date.now()
  },
   course:{
    type: ObjectId,
    ref:"Courses" 
   },
   user:{
    type: ObjectId,
    ref:"User" 
   },
   attended:{
     type:Boolean,
     default:false
   }
}, configModel.options);

module.exports = mongoose.model('Attendance',Attendance );