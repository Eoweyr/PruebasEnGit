import cors from 'cors';
import express, { application } from 'express';
import * as dotenv from "dotenv";
import mongoose from 'mongoose';
import helmet from 'helmet';

dotenv.config();

if(!process.env.PORT) {
    console.log('Error al obtener el puerto');
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const APP = express();
APP.use(helmet())
APP.use(cors())
APP.use(express.json())
