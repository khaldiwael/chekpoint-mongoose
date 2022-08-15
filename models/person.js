const {Schema,model} = require('mongoose')

//Create a person with this prototype:

const personSchema = new Schema({
    name:{type: String,required: true , unique:true},
    age:{type:Number},
    favoriteFoods:{type:[String]}
});

module.exports = User = model("User",personSchema) 