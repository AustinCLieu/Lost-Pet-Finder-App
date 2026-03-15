-- Enable RLS
alter table public.profiles enable row level security;

-- Profiles: anyone can view all profiles
create policy "Anyone can view profiles"
  on public.profiles for select
  using (true);

-- Profiles: users can insert their own profiles
create policy "Users can insert their own profiles"
  on public.profiles for insert
  with check (auth.uid() = id)

-- Profiles: users can update their own
create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Pet reports: users can delete only their own pet_reports
create policy "Users can delete their own reports"
  on public.pet_reports for delete
  using (auth.uid() = user_id);
