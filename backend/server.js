import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import clientRoutes from './routes/clientRoutes.js'
import connectToDB from './config/db.js'

dotenv.config()

connectToDB()

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
 res.send('Api is running...')
})

app.use('/api/clients', clientRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))