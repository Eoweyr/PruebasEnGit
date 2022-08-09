import express from 'express'
import routerUsuarios from './routers/routerUsuarios'

const app = express()
const port: number = 3004

app.use(express.json())
app.use('/usuarios', routerUsuarios)


app.listen(port, () => {
    console.log(`Servidor ejecutandose en el puerto: ${port}`);
})