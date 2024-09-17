const mongoose = require("mongoose");
const mongoURI = 'mongodb://localhost:27017/chatterbox';

async function connectDB() {
    try {
      await mongoose.connect(mongoURI, {
        
      });
      console.log('MongoDB connected successfully');
      return true;
    } catch (err) {
      console.error('MongoDB connection error:', err);
      return false;
    }
}

const userSchema = {
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:false,
    },
    dateOfBirth:{
        type:Date,
        required:false,
    },
    active:{
        type:Boolean,
        required:false
    },
    image:{
        type:String,
        required:false
    },
    chats:{
        type:Array,
        required:false
    },
    createdAt:{
        type:Date,
        required:false
    }
}

module.exports = {connectDB}