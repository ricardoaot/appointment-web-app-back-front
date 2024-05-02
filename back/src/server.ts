import indexRouter from "./routes/indexRouter";
import express from "express";
import morgan from "morgan";

const server = express();
server.use(morgan('dev'));
server.use(indexRouter);

export default server