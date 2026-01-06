import dotenv from "dotenv";
dotenv.config();
import express,{Application, Request, Response} from "express";
import {checkConnection , Tablas} from './config'


const app: Application = express();

const PORT: number = Number(process.env.PORTS ?? 3000) || 3000 ;

checkConnection()
app.use(express.json());


app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Express + TypeScript Server 🚀" });
});


export default app;
