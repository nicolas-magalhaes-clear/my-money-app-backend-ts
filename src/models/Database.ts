import mongoose from "mongoose";

export default function mongooseConnection(){
    try{
        console.log('Connecting to database')
        mongoose.connect('mongodb://localhost/mymoney')
        console.log('Database connected')
    }
    catch(error){
        console.log('Erro na conexão:', error)
    }
}

