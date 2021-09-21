require('dotenv').config();
let ServidorModelo=require('./models/servidorMoldelo.js');
let servidor= new ServidorModelo();
servidor.levantarSevidor();