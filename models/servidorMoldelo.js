const express = require('express')

class ServidorModelo{
    constructor(){

        this.app = express();
        this.llamarRutas(); //configuracion de express (get-post/put/delete)
    }
    levantarSevidor(){
        this.app.listen(process.env.PUERTO,function(){
            console.log("servidor encendido"+process.env.PUERTO)
        });
    }

    llamarRutas(){
        this.app.get('/facturas', function (req, res) {
            res.send('Hola Vale ')
          });
          this.app.post('/facturas/nuevo', function (req, res) {
            res.send('Hola Vale ')
          });
          
          this.app.put('/facturas/cambiar', function (req, res) {
            res.send('Hola Vale ')
          });
          
          this.app.delete('/facturas/borrar', function (req, res) {
            res.send('Hola Vale ')
          });
           
    }
}