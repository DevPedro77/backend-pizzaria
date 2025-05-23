import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import 'express-async-errors';
import cors from 'cors';


import {router} from './routes';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(router);

// Middleware para tratamento de erros
app.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
  if(err instanceof Error){
    return res.status(400).json({
      error: err.message
    })
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
});

app.listen(8080,()=>{
    console.log('Servidor online na porta 8080');
})