
-- Contact messages table
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert contact messages (public contact form)
CREATE POLICY "Anyone can submit contact messages"
  ON public.contact_messages
  FOR INSERT
  WITH CHECK (true);

-- Only authenticated admin can read messages
CREATE POLICY "No public read on contact messages"
  ON public.contact_messages
  FOR SELECT
  USING (false);

-- Site settings table for profile picture etc
CREATE TABLE public.site_settings (
  id TEXT NOT NULL DEFAULT 'default' PRIMARY KEY,
  profile_image_url TEXT,
  banner_image_url TEXT,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Anyone can read site settings (public portfolio)
CREATE POLICY "Anyone can read site settings"
  ON public.site_settings
  FOR SELECT
  USING (true);

-- Anyone can update site settings (for now, no auth)
CREATE POLICY "Anyone can update site settings"
  ON public.site_settings
  FOR UPDATE
  USING (true);

CREATE POLICY "Anyone can insert site settings"
  ON public.site_settings
  FOR INSERT
  WITH CHECK (true);

-- Insert default row
INSERT INTO public.site_settings (id) VALUES ('default');

-- Storage bucket for profile images
INSERT INTO storage.buckets (id, name, public) VALUES ('profile-images', 'profile-images', true);

-- Allow public read on profile images
CREATE POLICY "Public read profile images"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'profile-images');

-- Allow public upload to profile images
CREATE POLICY "Public upload profile images"
  ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'profile-images');

CREATE POLICY "Public update profile images"
  ON storage.objects
  FOR UPDATE
  USING (bucket_id = 'profile-images');
