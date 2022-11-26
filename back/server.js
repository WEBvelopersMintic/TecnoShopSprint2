const app=require("./app")
const connectDatabase = require("./config/database");
const cloudinary= require("cloudinary")

//Seteamos archivo de configuracion
if(process.env.NODE_ENV==="PRODUCTION") require('dotenv').config({path:'back/config/config.env'})


//Configurar base de datos
connectDatabase();

//Configurar Cloudinary
cloudinary.config({ 
    cloud_name: 'tecnoshp', 
    api_key: '958477362898645', 
    api_secret: '6WrKTRT446ox6pBeSQwbFpbGOJ4' 
  });



console.log(cloudinary.config());

//Llamemos al server
const server=app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})