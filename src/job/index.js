
import axios from 'axios';
import { response } from 'express';
import { RESTHOST } from '../config.js';
export default  async function job()  {


const abortController=new AbortController();
try{
const {data: response} = await axios.get("https://www.dolarsi.com/api/api.php?type=valoresprincipales",   {signal: abortController.signal});

const skimmedResponse=response.filter( e=> e.casa.nombre!=='Dolar Soja' && e.casa.nombre!=='Bitcoin' && e.casa.nombre!=='Dolar turista' && e.casa.nombre!=='Dolar' && e.casa.nombre!=='Argentina')
console.log(skimmedResponse)
skimmedResponse.map((e)=>{
    const {nombre, compra, venta}=e.casa
    postData(nombre, compra, venta)
})
}
catch(error){
    console.error(error.message);
}

console.log("job running")


/*
function mapData(rsp) {
    rsp.map(   (e)=> {
        const {nombre, compra, venta}=e.casa
        postData(nombre, compra, venta);
    })

   
} */
async function postData (nombre, compra, venta){
    await axios.post(RESTHOST+'/cotizaciones/add', {nombre, compra, venta})
          .then( function (response) { console.log(response +" response del post") } )
          .catch(function (error) { console.log(error)})

    }




}






