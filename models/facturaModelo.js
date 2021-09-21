const { model, Schema } = require('mongoose');

const FacturaModelo=Schema({
    producto:{
        type:String,
        require:true
    },
    cantidad:{
    type:Number,
    require:true
    },
    peso:{
    type:String,
    require:true
    },
    foto:{
        type:String,
        require:true  
    },
    precio:{
        type:Number,
        require:true
    }
    
});
module.exports = model('Factura', FacturaModelo);
