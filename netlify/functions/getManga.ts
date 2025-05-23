import { Handler } from '@netlify/functions';
import { fetchMangaData } from '../../src/integrations/supabase';

export const handler: Handler = async (event) => {
  try {
    const mangaId = event.queryStringParameters?.id;
    if (!mangaId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Missing manga id' }),
      };
    }
    const { data, error } = await fetchMangaData(mangaId);
    if (error || !data || data.length === 0) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: 'Manga not found' }),
      };
    }
    return {
      statusCode: 200,
      body: JSON.stringify(data[0]),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error retrieving manga', error: error.message }),
    };
  }
};
