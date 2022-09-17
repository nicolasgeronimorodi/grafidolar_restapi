import mongoose from 'mongoose'
const {connect}=mongoose;
import {MONGODB_URI, DB_NAME} from './config.js'



(async ()=>{
    console.log("works")
try{
const db=await connect(MONGODB_URI)
console.log('DB connected to', db.connection.name)
} catch(error){
    console.error(error);
}
})()