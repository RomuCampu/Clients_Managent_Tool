import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import clientRoutes from './routes/clientRoutes.js'
import connectToDB from './config/db.js'
import cors from 'cors'
import bodyParser from "body-parser"

const app = express();

dotenv.config();

connectToDB();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mount the router
app.use('/api/clients', clientRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));