const e = require('express')
let express = require('express')
let app = express()


app.get('/hola', function(req, res){
    res.send('<h1>Hola Mundo</h1><h2>desde express</h2>')


})

app.listen(process.env.PORT || 3000, (e)=>{
    e
    ? console.error('Servidor no conectado')
    : console.log('Servidor a la escucha en el puerto:' + (process.env.PORT || 3000))
})