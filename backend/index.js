const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const Router = require('../backend/routes/client')
const app = express();
// mongodb config
mongoose.connect('mongodb://localhost:27017/fileattente')
.then(db =>{
    console.log('db connected');
})
.catch(err =>{
    console.log(err);
})
app.use(express.json());
app.use(cors());
app.use('/api',Router)

const port = process.env.Port || 4000;
app.listen(port,()=>{
    console.log(`connected on port http//:localhost:${port}`);
})

