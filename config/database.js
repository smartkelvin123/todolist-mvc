const mongoose = require('mongoose');

const connectDB =async () => {
    try{
        const conn = await mongoose.connect(
             process.env.DB_CONNECTION
        )
        console.log(`mongodb connect: ${conn.connection.host}`)
        
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

// Connect to Mongo
// mongoose.connect(
//     process.env.DB_CONNECTION, 
//     { useNewUrlParser: true }, 
//     () => {console.log("You are smart guy,Connected to db!");}
// )

module.exports =connectDB;