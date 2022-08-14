//db.js

const mongoose = require('mongoose')

const url = `mongodb+srv://wkhaldi:YMI85n2AR5dkt2sb@cluster0.tuwg596.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

const db = async () => {

mongoose.connect(url,connectionParams)
.then( () => {
    console.log('Connected to the database ')
})
.catch( (err) => {
    console.error(`Error connecting to the database. n${err}`);
})

}

module.exports=  db;