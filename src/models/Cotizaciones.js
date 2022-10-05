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
},
{timestamps: true,
versionKey: false
}
)

export default model('cotizaciones', cotizacionDolar)