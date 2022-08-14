const express =require('express')
const User = require("./models/person.js")
const port = '4444'

const app = express()

const db = require("./db");
const { find } = require('./models/person.js');

// step 5
require("dotenv").config();

db();


//Create and Save a Record of a Model:

//Create Many Records with model.create()

// User.create(
//     [
//         {name:'Mary',age:10},
//         {name:'Mary2',age:15}
//     ],
//     (err,data)=>
//     err
//     ?console.log('err: ',err)
//     :console.log('data created! ')
// )

User.find((err,data)=>{err
    ?console.log(err)
    :console.log("data find: \n %", data);
})

//Use model.find() to Search Your Database



//Use model.findOne() to Return a Single Matching Document from Your Database

// User.findOne({name:"wael"},(err,data) =>{
//     err
//     ? console.log("err:",err)
//     : console.log("find wael :\n %",data)
// })


//Use model.findById() to Search Your Database By _id

// User.findById("62f6de22d4fdc79a46346a41",function(err,data){
//     err
//     ?console.log("err: \n %",err)
//     :console.log("find by id :\n %",data)
// })

//Perform Classic Updates by Running Find, Edit, then Save

// User.findById("62f7e4feb8d6502afea45ec0",{},{},function(err,data){
//     if (err){
//         console.log('err: \n %',err);
//     }else{
//         data.favoriteFoods.push("hamburger")
//         data.markModified("favoritFoods")
//         data.save().then(data =>console.log("User.findById data saved :\n %",data))
//         .catch(err=>{console.log("err:\n %",err)})
//     }
// })


// Perform New Updates on a Document Using model.findOneAndUpdate()

// User.findOneAndUpdate({name:"wael"},{age:20},{new:true},function(err,data) {
//     err
//     ?console.log("err: \n",err)
//     :console.log("data find one:\n %",data)
// })


// Delete One Document Using model.findByIdAndRemove

// User.findByIdAndRemove("62f6e6d836b2ba8588c2ea73",function(err,data) {
// err
// ?console.log("err: \n %",err)
// :console.log("remove: \n %",data)
// }
// )


//MongoDB and Mongoose - Delete Many Documents with model.remove()

//solution with a warning 
// User.remove({name:"Mary"},function(err){
//     err?console.log("error remove:"):console.log("removed")
// })

//solution 2
// const removeManyPeople = function(done) {
//     let nameToRemove = "Mary";
//     User.deleteMany({name: {$regex : /^Mary/}}, (err, data)=> {
//     err ? done(err) : done(null,data)
//     }
// )};
// removeManyPeople(function(err,data) {
//     err 
//     ?console.log(err)
//     :console.log(data)
// })

const search = function(done) {
    let searchFavoriteFoods ="hamburger"
    User.find({favoriteFoods:searchFavoriteFoods}).sort({name:"asc"}).limit(2).select("-age").exec(
        function(err,data){
            if(err){
                done(err)
            }else{
                done(null,data)
            }
        }
    )
}

search(function(err,data){
    err
    ?console.log("search error : \n %",err)
    :console.log("search data : \n %",data)
})

app.listen(port,(err)=>{
    err
    ? console.log(err)
    : console.log(`this server is running on port : ${port}`)
});