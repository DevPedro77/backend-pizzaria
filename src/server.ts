import express, { Request, Response, NextFunction } from 'express';
import {router} from './routes';

const app = express();


app.use(router);
app.use(express.json());


app.listen(8080,()=>{
    console.log('Servidor online na porta 8080');
})