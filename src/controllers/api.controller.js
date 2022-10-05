
import Cotizaciones from "../models/Cotizaciones.js";
//import DolarPrecioxTipos from "../models/DolarPrecioxTipos.js";


export const renderCotizaciones=async(req, res)=>{
   
    try {
    const cotizaciones=await Cotizaciones.find().lean();
    res.json(cotizaciones)
   } catch (error) {
    console.log(error)
   }
}

export const agregarCotizacion=async(req, res)=>{
    const {nombre, compra, venta}=req.body
    try{
        //Cotizaciones.add(0001, "202", "198",  )
        const cotizacion=Cotizaciones({nombre, compra, venta})
        const saveCotizacion=await cotizacion.save()
        console.log(saveCotizacion)
    }
    catch(error){
        console.log(error)
    }
}

export const borrarCotizaciones=async (req, res)=>{
    try {
        const borrado=await DolarPrecioxTipos.remove({})
        res.json(borrado)
        
    } catch (error) {
        console.log(error)
        
    }
}