-- Create the hire_now_submissions table
CREATE TABLE IF NOT EXISTS hire_now_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    submission_date DATE NOT NULL,
    hire_type TEXT NOT NULL,
    skills TEXT,
    engineers_count TEXT NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company_size TEXT NOT NULL,
    additional_info TEXT,
    source TEXT,
    status TEXT NOT NULL DEFAULT 'New',
    notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create an index for better performance on commonly queried fields
CREATE INDEX IF NOT EXISTS idx_hire_now_submissions_status ON hire_now_submissions (status);
CREATE INDEX IF NOT EXISTS idx_hire_now_submissions_email ON hire_now_submissions (email); 