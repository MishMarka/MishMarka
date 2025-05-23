import axios from 'axios';
import { HuggingFaceInference } from '@huggingface/inference';

const huggingFaceApi = new HuggingFaceInference(process.env.HUGGING_FACE_API_KEY);

export const generateText = async (prompt: string, model: string = 'gpt-neo') => {
    try {
        const response = await huggingFaceApi.textGeneration({
            model,
            inputs: prompt,
        });
        return response.generated_text;
    } catch (error) {
        console.error('Error generating text:', error);
        throw new Error('Text generation failed');
    }
};

export const generateImage = async (prompt: string, model: string = 'stable-diffusion') => {
    try {
        const response = await huggingFaceApi.imageGeneration({
            model,
            inputs: prompt,
        });
        return response.images[0]; // Assuming the first image is the desired output
    } catch (error) {
        console.error('Error generating image:', error);
        throw new Error('Image generation failed');
    }
};