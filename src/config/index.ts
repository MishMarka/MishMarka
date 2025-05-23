import dotenv from 'dotenv';

dotenv.config();

const config = {
    PORT: process.env.PORT || 3000,
    SUPABASE_URL: process.env.SUPABASE_URL || '',
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY || '',
    HUGGING_FACE_API_KEY: process.env.HUGGING_FACE_API_KEY || '',
    HUGGING_FACE_MODEL: process.env.HUGGING_FACE_MODEL || 'default-model',
};

export const connectToDatabase = () => {};

export default config;