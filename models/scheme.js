const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const myScheme=new Schema({
    place:{
        type: String,
        required: [true, 'This is a required field']
    },
    description:{
        type: String,
        required: [true, 'This is a required field']
    },
    expenditure:{
        type: Number,
        required: [true, 'This is a required field']
    },
    details:{
        type: String,
        required:[true,'This is a required field']
    },
    email: {
        type: String,
        required:[true,"This is a required field"]
    }
});
const Scheme=mongoose.model('scheme',myScheme);
module.exports=Scheme;
