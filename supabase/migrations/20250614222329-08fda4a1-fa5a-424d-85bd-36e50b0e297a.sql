
-- Table for startup ideas and AI responses
CREATE TABLE public.user_ideas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  idea TEXT NOT NULL,
  ai_response JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),

  CONSTRAINT fk_user
    FOREIGN KEY(user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.user_ideas ENABLE ROW LEVEL SECURITY;

-- Allow users to SELECT their own ideas
CREATE POLICY "Select own ideas" ON public.user_ideas
  FOR SELECT USING (auth.uid() = user_id);

-- Allow users to INSERT their own ideas
CREATE POLICY "Insert own ideas" ON public.user_ideas
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Allow users to UPDATE their own ideas
CREATE POLICY "Update own ideas" ON public.user_ideas
  FOR UPDATE USING (auth.uid() = user_id);

-- Allow users to DELETE their own ideas
CREATE POLICY "Delete own ideas" ON public.user_ideas
  FOR DELETE USING (auth.uid() = user_id);
