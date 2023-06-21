import express from 'express';
import { getAll, getPlaylistById } from '../controller/playlist';

const playlistRouter = express.Router();

playlistRouter.get('/', getAll);
playlistRouter.get('/id/:id', getPlaylistById)

export default playlistRouter;