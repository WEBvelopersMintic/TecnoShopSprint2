const mongoose=require("mongoose")

const productosSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Por favor registra el nombre del producto."],
        trim:true,
        maxLength:[120,"El nombre del producto no debe exceder los 120 caracteres."]
    },
    price:{
        type: Number,
        required:[true,"Por favor registre el precio del producto."],
        maxLength:[8, "El precio del producto no puede estar por encima de 99'999.999"],
        default: 0.0
    },
    trademark:{
      type:String,
      required:[true,"Por favor registre trademark para el producto."]
    },
    reference:{
      type:String,
      required:[true,"Por favor registre una referencia para el producto."]
    },
    model:{
        type:String,
        required:[true,"Por favor registra la marca del producto."],
        trim:true,
        maxLength:[120,"La marca del producto no debe exceder los 120 caracteres."]
    },
    imagen:
    {
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    vendedor:{
        type:String,
        required:[true,"Por favor registre el vendedor de producto"]
    },
    inventario:{
        type: Number,
        required:[true, "Por favor registre el stock del producto"],
        maxLength:[5,"Cantidad maxima del producto no puede sobrepasar 99999"],
        default:0
    },
    user:{
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: false
    },
    fechaCreacion:{
        type:Date,
        default:Date.now
    }

})

module.exports=mongoose.model("productos",productosSchema)