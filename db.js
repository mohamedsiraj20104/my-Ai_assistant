const mongoose = require("mongoose")

const connectionDB = async () => {

    try 
    {
        mongoose.connect("mongodb+srv://siraj:2FJ63FMlPnQHHpcT@cluster0.xxdhvm1.mongodb.net/LOGIN_DB?retryWrites=true&w=majority", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }).then(()=>{
        console.log("connected To DB")
    })

 
    }

    catch (error) 
    {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = connectionDB;