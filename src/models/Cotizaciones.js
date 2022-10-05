import mongoose from 'mongoose';
const {Schema, model}=mongoose;

const cotizacionDolar=new Schema(
{
nombre: {type: String,
required: true,

},

compra: {type: String,
required: true,
},
venta: {
    type: String,
required: true},
fecha:{
    type: Date,
    required: true
}






},
{timestamps: true,
versionKey: false
},
{
    fecha: Date
}
)

export default model('Cotizaciones', cotizacionDolar)