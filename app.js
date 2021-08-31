

require('dotenv').config()
 
app.get('/facturas', function (req, res) {
  res.send('Hola Vale ')
})

app.post('/facturas/nuevo', function (req, res) {
  res.send('Hola Vale ')
})

app.put('/facturas/cambiar', function (req, res) {
  res.send('Hola Vale ')
})

app.delete('/facturas/borrar', function (req, res) {
  res.send('Hola Vale ')
})
 
app.listen(process.env.PUERTO,function(){
    console.log("servidor encendido"+process.env.PUERTO)
})