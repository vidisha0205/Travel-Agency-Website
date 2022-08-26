const express=require("express");
const router=express.Router();
const Scheme=require('../models/Scheme');
const Schem2=require('../models/schem2');
//Home Page that displays only places
router.get('/',(req,res,next) =>{
    Scheme.find({}).select('place')
    .then((data)=>res.json(data))
    .catch(next);
});
router.get('/info/:xplace',(req,res,next) =>{
    Scheme.findOne({place: req.params.xplace})
    .then((data)=>res.json(data))
    .catch(next);
});
//SIGN UP FOR NEW USERS
router.post('/signup',(req,res,next) =>{
    if(req.body){
        Schem2.create(req.body)
    .then((data)=>res.json(data))
    .catch(next);
    }
    else{
        res.json("Input Fields are mandatory");
    }
})
//Tab on Places that routes here, displaying EVERYTHING ABOUT ALL PLACES
router.get('/places',(req,res,next) => {
    Scheme.find({})
    .then((data)=>res.json(data))
    .catch(next);
});
//Tab on New Place that lets you create a new destination, added to database
router.post('/new',(req,res,next)=>{
    if(req){
        Scheme.create(req.body)
        .then((data)=>res.json(data))
        .catch(next);
    }
    else{
        res.json("Input fields are mandatory");
    }
});
//Tab on Edit to update expenditures of any place
router.put('/edit/:place/:x',(req,res,next) => {
    Scheme.findOneAndUpdate({place:req.params.place},{expenditure:req.params.x})
    .then((data)=>res.json(data))
    .catch(next);
})

module.exports=router;
