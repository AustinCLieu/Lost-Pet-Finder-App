-- Enable RLS
alter table public.pet_reports enable row level security;

-- Pet reports: anyone can view all reports
create policy "Anyone can read all reports"
  on public.pet_reports for select
  using (true);

-- Pet reports: only logged-in users can create their own report
create policy "Users can insert their own reports"
  on public.pet_reports for insert
  with check (auth.uid() = user_id);

-- Pet reports: users can update their own report
create policy "Users can update their own reports"
  on public.pet_reports for update
  using (auth.uid() = user_id);