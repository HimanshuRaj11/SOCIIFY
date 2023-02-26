
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/SOCIIFY',{ useNewUrlParser: true , useUnifiedTopology: true})
.then(()=>{console.log('Connection SuccessFull')})
.catch((e)=>{console.log(e)})

