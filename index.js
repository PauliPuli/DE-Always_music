import express from 'express';
import router from './routes/routes.js'; //Contiene ruta principal
import 'dotenv/config';
const app = express()
const PORT = process.env.PORT || 3000

console.log(process)
console .log(process.argv)

//Middleware
app.use('/',router);


app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:PORT`))