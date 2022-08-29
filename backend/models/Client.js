const mongoose = require('mongoose');

const Client = new mongoose.Schema({

    username:{
        type:String,
    },
    demande:{
       type:Object
    },
    details:{
        type:String,
    },
    status:{
        type:String,
        default:'en cour',
    },
  
    randomGeneratedString: {
        type: String,
        minlength: 6,
        maxlength: 10,
      },
      
},
{ timestamps: true },
)

Client.pre('save', async function (next) {
    const randomInteger = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    this.randomGeneratedString = Math.random()
      .toString(36)
      .substr(2, randomInteger(6, 10));
    next();
  });


  




module.exports= mongoose.model('Client',Client);


