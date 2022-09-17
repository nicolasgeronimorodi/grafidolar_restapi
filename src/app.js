import express, { application} from 'express';
import cors from 'cors'
import morgan from 'morgan'
import router from "./routes/api.routes.js"
import * as cron from 'node-cron'
import job from './job/index.js';
const options = { origin: ['http://localhost:4000', 'http://192.168.0.113:4000']}
//Settings
const app=express()
cron.schedule('*/1 * * * *', ()=>{
  console.log('running a task every minute')
} )

cron.schedule('0 10,12,14,16 * * MON,TUE,WED,THU,FRI', ()=>{
  job();
}, {scheduled: true,
timezone: "America/Argentina/Buenos_Aires"
})

const errorHandler = (err, req, res, next) =>{
  console.log(`error ${err.message} ` );
  const status=error.status || 400
  res.status(status).send(err.message);
  next()
}

//Middlewares


app.use(morgan("dev"));
app.use(express.json())



app.use(cors(options))



app.post("/cotizaciones/add", function(req, res, next) { 
  
  
  try {
    return res.status(200).json(),
 next()
   
  } catch (err) {
    next(err)
  }
  

  

})
app.use(errorHandler)
app.use(router) 


//Routes


//app.post("/cotizaciones/add", function(req, res, next) { return res.status(200).json()})
export default app
