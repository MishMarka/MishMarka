import { Router } from 'express';
import MangaController from '../controllers/mangaController';

const router = Router();
const mangaController = new MangaController();

export const setRoutes = (app) => {
    app.use('/api/manga', router);
    
    router.post('/create', mangaController.createManga.bind(mangaController));
    router.get('/:id', mangaController.getManga.bind(mangaController));
    router.post('/translate', mangaController.translateText.bind(mangaController));
};