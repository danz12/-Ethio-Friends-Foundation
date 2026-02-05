import { createClient } from '@supabase/supabase-js';


// Initialize database client
const supabaseUrl = 'https://deraxsrngpwvpwpyskqw.databasepad.com';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ijc3Njc3OGFjLTYwMzMtNDdkNy04YzAyLTI4NWVjZTU2NzFlYSJ9.eyJwcm9qZWN0SWQiOiJkZXJheHNybmdwd3Zwd3B5c2txdyIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzcwMjg3NDExLCJleHAiOjIwODU2NDc0MTEsImlzcyI6ImZhbW91cy5kYXRhYmFzZXBhZCIsImF1ZCI6ImZhbW91cy5jbGllbnRzIn0.Kd78dcbEQ_v3y6yBO3KQVlP9bO9GnPKN7WmEMyQOuK4';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };