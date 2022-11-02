const { request, response } = require('express');
const express = require('express');

const app = express();
 
app.get("/courses", (request, response) =>{
    return response.json(["Curso 1", "Curso 2"]);
});

app.post("/courses", (resquest, response)=>{
    return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});
app.put("/courses/:id", (resquest, response) =>{
    return response.json(["Curso 6", "Curso 2", "Curso 3"]);
});
app.patch("//courses/:id", (request, response)=>{
    return response.json(["Curso 6", "Curso 5", "Curso 10"]);
});
app.delete("/courses/:id", (request, response)=>{
    return response.json(["Curso 2", "Curso 3"]);

});
app.listen(3333)