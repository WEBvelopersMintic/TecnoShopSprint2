const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
    envioInfo: {
        direccion: {
            type: String,
            required: true
        },
        ciudad: {
            type: String,
            required: true
        },
        telefono: {
            type: String,
            required: true
        },
        departamento: {
            type: String,
            required: true
        }
    },
    user:
    {
        type: String,
        required: true,
    },
    items: [{
        nombre: {
            type: String,
            required: true
        },
        cantidad: {
            type: Number,
            required: true
        },
        imagen: {
            type: String,
            required: false
        },
        precio: {
            type: Number,
            required: true
        },
        producto: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "productos"
        }
    }
    ],
    pagoInfo: {
        id: {
            type: String
        },
        estado: {
            type:String
        }
    },
    fechaPago:{
        type: Date
    },
    precioItems:{
        type:Number,
        required: true,
        default: 0.0
    },
    precioTotal:{
        type:Number,
        required:true,
        default:0.0
    },
    estado:{
        type: String,
        required: true,
        default:"Procesando"
    },
    fechaCreacion:{
        type:Date,
        default: Date.now
    }
})

module.exports=mongoose.model("order",orderSchema)