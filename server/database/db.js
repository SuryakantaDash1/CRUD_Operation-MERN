import mongoose from "mongoose"


const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-0etjowe-shard-00-00.gnc47lu.mongodb.net:27017,ac-0etjowe-shard-00-01.gnc47lu.mongodb.net:27017,ac-0etjowe-shard-00-02.gnc47lu.mongodb.net:27017/?ssl=true&replicaSet=atlas-nrhnj9-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database Connected Successfully');
    } catch(error){
        console.log("Error while connecting with the database", error);
    }
}

export default Connection;