import indexRouter from "./routes/indexRouter";
import express from "express";
import morgan from "morgan";
import cors from "cors";

const server = express();
server.use(express.json());
server.use(morgan('dev'));
server.use(cors())
server.use(indexRouter);

export default server