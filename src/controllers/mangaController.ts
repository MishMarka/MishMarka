import { AIMangaGenerator } from '../services/aiMangaGenerator';
import { fetchMangaData } from '../integrations/supabase';
import multilingualService from '../services/multilingualService';

const aiMangaGenerator = new AIMangaGenerator();

class MangaController {
    async createManga(req, res) {
        try {
            const { title, description, language } = req.body;
            const generatedChapters = await aiMangaGenerator.generateManga(title, description, language);
            res.status(201).json({ title, description, chapters: generatedChapters });
        } catch (error) {
            res.status(500).json({ message: 'Error creating manga', error });
        }
    }

    async getManga(req, res) {
        try {
            const mangaId = req.params.id;
            const { data, error } = await fetchMangaData(mangaId);
            if (error || !data || data.length === 0) {
                return res.status(404).json({ message: 'Manga not found' });
            }
            res.status(200).json(data[0]);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving manga', error });
        }
    }

    async translateText(req, res) {
        try {
            const { text, targetLanguage } = req.body;
            const translatedText = await multilingualService.translateText(text, targetLanguage);
            res.status(200).json({ translatedText });
        } catch (error) {
            res.status(500).json({ message: 'Error translating text', error });
        }
    }
}

export default new MangaController();