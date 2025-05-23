import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export const signUpUser = async (email: string, password: string) => {
    const { user, error } = await supabase.auth.signUp({ email, password });
    return { user, error };
};

export const signInUser = async (email: string, password: string) => {
    const { user, error } = await supabase.auth.signIn({ email, password });
    return { user, error };
};

export const fetchMangaData = async (mangaId: string) => {
    const { data, error } = await supabase
        .from('manga')
        .select('*')
        .eq('id', mangaId);
    return { data, error };
};

export const saveMangaData = async (manga: any) => {
    const { data, error } = await supabase
        .from('manga')
        .insert([manga]);
    return { data, error };
};

export const saveMangaToDatabase = saveMangaData;