import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Get current file directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: '.env.local' });

// Create Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

async function runMigration() {
  try {
    console.log('Running migrations...');
    
    // Read and execute hire_now_submissions table migration
    const hireMigrationSQL = fs.readFileSync(
      path.join(__dirname, 'create_hire_now_submissions_table.sql'),
      'utf8'
    );
    
    const { error } = await supabase.rpc('pg_query', {
      query: hireMigrationSQL
    });
    
    if (error) {
      throw error;
    }
    
    console.log('Migration completed successfully!');
  } catch (error) {
    console.error('Migration failed:', error);
  }
}

runMigration(); 