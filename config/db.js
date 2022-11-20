const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://orca:orca@cluster0.b1zdhhl.mongodb.net/eventsDB?retryWrites=true&w=majority");
        console.log(`MongoDB is connected `);
    }catch (error) {
        console.log(error);
    }
}

module.exports = connectDB ;