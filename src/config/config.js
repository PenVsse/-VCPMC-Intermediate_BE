import dotenv from 'dotenv'
import express from 'express';
import path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const config = (app) => {
    dotenv.config();

    app.use(express.static(path.join('./src', 'public')));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(cors({
        origin: "*",
        methods: "GET,POST,PUT,DELETE,PATCH",
        credentials: true,
    }))
    app.use(morgan('common'))

    //limit json req
    app.use(bodyParser.json({ limit: "30mb", extended: true }));
    app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
}

export default config;
