const express=require("express");
const bodyparser=require("body-parser");
const mongoose=require("mongoose");
const routes=require('./routes/api');
require("dotenv").config();

const app=express();
const port=process.env.port||5000;

mongoose
    .connect(process.env.DB,{useNewUrlParser: true})
    .then(()=>console.log("MongoDB connected successfully"))
    .catch((err)=>console.log(err));

mongoose.Promise = global.Promise;

 app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, OPTIONS');
    next();
});
app.use(bodyparser.json());
app.use('/api',routes);
app.listen(port, ()=>
    {
        console.log(`Server up and ready on ${port}`);
})
