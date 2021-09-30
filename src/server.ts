import express from 'express'
import './database'
import routes from '../src/routes'

const app = express()
const PORT = 3000

app.use(express.json())

app.use(routes)

app.listen(PORT, () => console.log(`Servido rodando na porta ${PORT}`))
