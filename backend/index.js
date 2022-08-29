const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');



const Router = require('../backend/routes/client');
const userRouter = require('../backend/routes/auth');
const app = express();
// mongodb config
mongoose.connect('mongodb://localhost:27017/fileattente')
.then(db =>{
    console.log('db connected');
})
.catch(err =>{
    console.log(err);
})
app.use(cors());
app.use(express.json());

app.use('/api',Router)
app.use('/api',userRouter)

const port = process.env.Port || 4000;
app.listen(port,()=>{
    console.log(`connected on port http//:localhost:${port}`);
})





