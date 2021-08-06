/**
 * api/utils/supabase-client.js
 * Helper to initialize the Superbase Client
 */

import {createClient, SupabaseClient} from '@supabase/supabase-js';

if (typeof process.env.NEXT_PUBLIC_SUPABASE_URL !== 'string') {
  throw new Error('SUPABASE URL is undefined');
}

if (typeof process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY !== 'string') {
  throw new Error('SUPABASE PUBLIC KEY is undefined');
}

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;