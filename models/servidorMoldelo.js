const express = require('express')
const { conectarBD }=require('../database/conexion.js');
const facturaModelo = require('./facturaModelo.js');
const facturaModelo=requiere("../models/facturaModelo.js")
class ServidorModelo{
    constructor(){

        this.app = express();
        this.levantarBD();
        this.auxiliares();
        this.llamarRutas(); //configuracion de express (get-post/put/delete)
    }

    levantarSevidor(){
        this.app.listen(process.env.PUERTO,function(){
            console.log("servidor encendido"+process.env.PUERTO)
        });
    }
    levantarBD(){
      conectarBD();
    }
    auxiliares(){
      this.app.use(express.json())
    }

    llamarRutas(){
        this.app.get('/facturas', function (req, res) {

           let datosFactura=req.body;
           try{
             let factura=new facturaModelo(datosFactura);
             await factura.save();
             res.status(200),json({
               respuesta:"exito",
               datos:factura
             })

           }catch(error){
            res.status(400).json()
           }
          });
          this.app.post('/facturas/nuevo', async function (req, res) {
            res.send('Hola Vale ')//para llevar datos
          });
          
          this.app.put('/facturas/cambiar', function (req, res) {
            res.send('Hola Vale ')
          });
          
          this.app.delete('/facturas/borrar', function (req, res) {
            res.send('Hola Vale ')
          });
           
    }
}
module.exports=ServidorModelo;