import { Handler } from '@netlify/functions';
import { AIMangaGenerator } from '../../src/services/aiMangaGenerator';

const aiMangaGenerator = new AIMangaGenerator();

export const handler: Handler = async (event) => {
  try {
    const { title, description, language } = JSON.parse(event.body || '{}');
    const chapters = await aiMangaGenerator.generateManga(title, description, language);
    return {
      statusCode: 200,
      body: JSON.stringify({ title, description, chapters }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error creating manga', error: error.message }),
    };
  }
};
