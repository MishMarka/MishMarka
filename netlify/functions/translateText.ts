import { Handler } from '@netlify/functions';
import multilingualService from '../../src/services/multilingualService';

export const handler: Handler = async (event) => {
  try {
    const { text, targetLanguage } = JSON.parse(event.body || '{}');
    if (!text || !targetLanguage) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Missing text or targetLanguage' }),
      };
    }
    const translatedText = await multilingualService.translateText(text, targetLanguage);
    return {
      statusCode: 200,
      body: JSON.stringify({ translatedText }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error translating text', error: error.message }),
    };
  }
};
