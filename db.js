//db.js

const mongoose = require('mongoose')
require('dotenv/config')

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

const db = async () => {

mongoose.connect(process.env.MONGO_URI,connectionParams)
.then( () => {
    console.log('Connected to the database ')
})
.catch( (err) => {
    console.error(`Error connecting to the database. n${err}`);
})

}

module.exports=  db;