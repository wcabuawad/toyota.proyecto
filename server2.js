var express = require('express');
var app = express();

app.use(express.static('public'))

var arautos = [
    { pathImage: '/img/86-side.png', autodesc: '2017 86', precio: '26.255' },
    { pathImage: '/img/yarisia-side.png', autodesc: '2017 Yaris iA', precio: '15.950' },
    { pathImage: '/img/corolla-side.png', autodesc: '2017 Corolla', precio: '18.500' },
    { pathImage: '/img/camry-side.png', autodesc: '2017 Camry', precio: '23.070' },
    { pathImage: '/img/camry-side.png', autodesc: '2017 Camry', precio: '23.070' }
]


app.get('/devolverautos', function (req, res) {
    res.send(arautos);
})

app.get('/',function(req,res){
 res.sendfile(__dirname + '/public/toyotaini.html')
})

app.get('/devolverusuario',function(req,res){
    var miobjeto={nombre:'juan',password:'123'}
    res.send(miobjeto)
})

var server = app.listen(process.env.PORT || 5000, function () {
    console.log("servidor arriba")
})