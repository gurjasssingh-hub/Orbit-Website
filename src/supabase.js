import { createClient } from "@supabase/supabase-js";

// For Vite:
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// For Create React App use: process.env.REACT_APP_SUPABASE_URL instead

export const supabase = createClient(supabaseUrl, supabaseAnonKey)