import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://xilefglwnnccnhlyqzzi.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpbGVmZ2x3bm5jY25obHlxenppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4MzI1NjksImV4cCI6MjA1ODQwODU2OX0.OlHCrljpw0dVRwtR_hieCirDPgILnokcDxKitWwr72k";
export const supabase = createClient(supabaseUrl, supabaseKey);
