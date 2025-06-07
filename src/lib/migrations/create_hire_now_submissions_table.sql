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

-- Create RLS (Row Level Security) policies
ALTER TABLE hire_now_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy allowing all authenticated users to access
-- You can restrict this later when you have an admins table
CREATE POLICY "Authenticated users can access all hire now submissions"
ON hire_now_submissions
FOR ALL
TO authenticated
USING (true);

-- Add an update trigger for the updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_hire_now_submissions_updated_at
BEFORE UPDATE ON hire_now_submissions
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX idx_hire_now_submissions_status ON hire_now_submissions (status);
CREATE INDEX idx_hire_now_submissions_email ON hire_now_submissions (email);
CREATE INDEX idx_hire_now_submissions_name ON hire_now_submissions (name);
CREATE INDEX idx_hire_now_submissions_date ON hire_now_submissions (submission_date); 