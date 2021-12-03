const express = require('express');
const app =  express();
const port = 3000;

app.use(express.json()); //middleware para procesar application/json.
//app.use(express.urlencoded()); //para procesar application/x-www-form-urlencoded

app.get('/', (request, response) => {
    if (request.query["id"]) {
        response.send("<h1>Hola mundo con parámetros querystring: " + request.query["id"]  + "</h1>");
    }else {
        response.send("<h1>Hola mundo sin parámetros</h1>");
    }
    
});

app.get('/:id/', (request, response) => {
    response.send("<h1>Hola mundo con parámetro por ruta variables" + request.params.id + "</h1>")
});

app.post('/', (request, response) => {
    response.send("<h1>Hola mundo como respuesta a un post, recibido: " + JSON.stringify(request.body) + "</h1>")
});

app.put('/editar', (request, response) => {
    response.send("<h1>Hola mundo como respuesta a un PUT, recibido: " + JSON.stringify(request.body) + "</h1>")    
});

app.listen(port, ()=> {
    console.log("El servidor está corriendo en el puerto: " + port);
});