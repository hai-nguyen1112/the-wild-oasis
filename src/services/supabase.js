import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dbikyidtkbfaqghlntsc.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRiaWt5aWR0a2JmYXFnaGxudHNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzNTgzMDksImV4cCI6MjA3NzkzNDMwOX0.uHV8A2ubhM6z2jTBY_SZyM9eMUFq1Ekpa6Y5MdkX4aI';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
