const express = require('express');
const cors = require('cors')
const { conectarBD } = require('../database/conexion.js')
const FacturaModelo = require("../models/facturaModelo.js")

class SevidorModelo {


    constructor() {

        this.app = express();
        this.levantarBD();
        this.auxiliares();
        this.llamarRutas();


    }

    levantarSevidor() {

        this.app.listen(process.env.PUERTO, function () {
            console.log("servidor encendido " + process.env.PUERTO);
        });

    }

    levantarBD() {
        conectarBD();
    }

    auxiliares() {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors())
    }


    llamarRutas() {

        this.app.get('/facturas', async function (req, res) { /*async para que separe los proceso  */
            try{
              let facturas=await FacturaModelo.find()
              res.status(200).json({
                respuesta: "exito",
                datos: facturas
            })/*await buscar */
            }catch /*por si hay un error el me lo muertra*/ (error){
              res.status(400).json({
                respuesta: "error",
                datos: error
            })
              }
            
        });

        this.app.post('/facturas/nuevo', async function (req, res) {

            let datosFactura = req.body;

            try {

                let factura = new FacturaModelo(datosFactura);
                await factura.save();
                res.status(200).json({
                    respuesta: "exito",
                    datos: factura
                })



            } catch (error) {

                res.status(400).json({
                    respuesta: "error",
                    datos: error
                })


            }

        });

        this.app.put('/facturas/cambiar', function (req, res) {
            res.send('Buenas tardes Valentina ');
        });

        this.app.delete('/facturas/borrar', function (req, res) {
            res.send('Buenas tardes Valentina ');
        });

    }

}

module.exports = SevidorModelo;