const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const userScheme=new Schema({
        name:{
            type: String,
            required: [true, 'This is a required field']
        },
        destination:{
            type: String,
            required: [true, 'This is a required field']
        },
        phone_number:{
            type: Number,
            required: [true, 'This is a required field']
        },
        dateOfArrival:{
            type: String,
            required:[true,'This is a required field']
        },
        number_of_days: {
            type: String,
            required:[true,"This is a required field"]
        }
    });
const newModel=mongoose.model('newModel',userScheme);
module.exports=newModel;
