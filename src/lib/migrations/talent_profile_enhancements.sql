-- Create experiences table
CREATE TABLE experiences (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  talent_id UUID REFERENCES talents(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  company TEXT NOT NULL,
  location TEXT,
  start_date DATE NOT NULL,
  end_date DATE,
  current BOOLEAN NOT NULL DEFAULT false,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create education table
CREATE TABLE education (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  talent_id UUID REFERENCES talents(id) ON DELETE CASCADE,
  institution TEXT NOT NULL,
  degree TEXT NOT NULL,
  field_of_study TEXT,
  location TEXT,
  start_date DATE NOT NULL,
  end_date DATE,
  current BOOLEAN NOT NULL DEFAULT false,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create certifications table
CREATE TABLE certifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  talent_id UUID REFERENCES talents(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  issuing_organization TEXT NOT NULL,
  issue_date DATE NOT NULL,
  expiry_date DATE,
  credential_id TEXT,
  credential_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS (Row Level Security)
ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE education ENABLE ROW LEVEL SECURITY;
ALTER TABLE certifications ENABLE ROW LEVEL SECURITY;

-- Create policies for experiences
CREATE POLICY "Users can read own experiences" 
ON experiences FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM talents
    WHERE talents.id = experiences.talent_id AND talents.user_id = auth.uid()
  )
);

CREATE POLICY "Users can insert own experiences" 
ON experiences FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1 FROM talents
    WHERE talents.id = experiences.talent_id AND talents.user_id = auth.uid()
  )
);

CREATE POLICY "Users can update own experiences" 
ON experiences FOR UPDATE
USING (
  EXISTS (
    SELECT 1 FROM talents
    WHERE talents.id = experiences.talent_id AND talents.user_id = auth.uid()
  )
);

CREATE POLICY "Users can delete own experiences" 
ON experiences FOR DELETE
USING (
  EXISTS (
    SELECT 1 FROM talents
    WHERE talents.id = experiences.talent_id AND talents.user_id = auth.uid()
  )
);

-- Create policies for education
CREATE POLICY "Users can read own education" 
ON education FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM talents
    WHERE talents.id = education.talent_id AND talents.user_id = auth.uid()
  )
);

CREATE POLICY "Users can insert own education" 
ON education FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1 FROM talents
    WHERE talents.id = education.talent_id AND talents.user_id = auth.uid()
  )
);

CREATE POLICY "Users can update own education" 
ON education FOR UPDATE
USING (
  EXISTS (
    SELECT 1 FROM talents
    WHERE talents.id = education.talent_id AND talents.user_id = auth.uid()
  )
);

CREATE POLICY "Users can delete own education" 
ON education FOR DELETE
USING (
  EXISTS (
    SELECT 1 FROM talents
    WHERE talents.id = education.talent_id AND talents.user_id = auth.uid()
  )
);

-- Create policies for certifications
CREATE POLICY "Users can read own certifications" 
ON certifications FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM talents
    WHERE talents.id = certifications.talent_id AND talents.user_id = auth.uid()
  )
);

CREATE POLICY "Users can insert own certifications" 
ON certifications FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1 FROM talents
    WHERE talents.id = certifications.talent_id AND talents.user_id = auth.uid()
  )
);

CREATE POLICY "Users can update own certifications" 
ON certifications FOR UPDATE
USING (
  EXISTS (
    SELECT 1 FROM talents
    WHERE talents.id = certifications.talent_id AND talents.user_id = auth.uid()
  )
);

CREATE POLICY "Users can delete own certifications" 
ON certifications FOR DELETE
USING (
  EXISTS (
    SELECT 1 FROM talents
    WHERE talents.id = certifications.talent_id AND talents.user_id = auth.uid()
  )
);

-- Allow admin access to all tables
CREATE POLICY "Admins can read all experiences"
ON experiences FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM users
    WHERE users.id = auth.uid() AND users.role = 'Administrator'
  )
);

CREATE POLICY "Admins can read all education"
ON education FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM users
    WHERE users.id = auth.uid() AND users.role = 'Administrator'
  )
);

CREATE POLICY "Admins can read all certifications"
ON certifications FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM users
    WHERE users.id = auth.uid() AND users.role = 'Administrator'
  )
); 