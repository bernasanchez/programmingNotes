const express = require('express')
const app = express() //instanciamos servidor dentro de app

let personas = [
  {
    id: 1,
    nombre: 'Julia'
  },
  {
    id: 2,
    nombre: 'Pepe'
  }
]
//*MIDDLEWARES (Intanciamos un nuevo MW)
app.use(express.json()) //toma los datos json de una solicitud, los transforma en un obj Js, los adjunta a la prop body del obj request antes de llegar a ls ruta post

//*METODO GET
app.get('/', function (req, res) { //creamos ruta get(metodo): el cliente quiere acceder a esa ruta
  // console.log('REQ',req)
  // console.log('RES',res)
  res.send('Hello World!!!') //el servidor responde con lo que tenga
})

app.get('/api/personas', (req,res) => {
  res.send(personas)
})

//*Metodo params: obtener algo dinamico
app.get('/api/personas/:id', (req, res) => { 
  const { id } = req.params;
  // console.log(id)
  const persona = personas.find((persona) => persona.id == id)
  if(persona) res.send(persona)
  else res.status(404).end(); 
  // res.send('Llegaste aca')
}) 

//*METODO POST
app.post('/api/personas', (req, res) => {
  // console.log(req.body)
  personas.push(req.body)
  res.status(201).send('recurso creado')
})

//*DELETE
app.delete('/api/personas/:id', (req, res) => {
  const id =  Number(req.params.id)
  personas = personas.filter(persona => persona.id !== id)
  res.sendStatus(204)
})

app.listen(3001) //cuando vayamos a este puerto, retornamos el clg