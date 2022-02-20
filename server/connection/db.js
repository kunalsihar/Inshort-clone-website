import mongoose from 'mongoose';

const Connection = async (username, password) => {
    try {   
        const URL = `mongodb://user:ironmankunal@inshort-clone-shard-00-00.vxfql.mongodb.net:27017,inshort-clone-shard-00-01.vxfql.mongodb.net:27017,inshort-clone-shard-00-02.vxfql.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-4nq65y-shard-0&authSource=admin&retryWrites=true&w=majority`
        
        await mongoose.connect(URL, { useNewUrlParser: true })
        
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;