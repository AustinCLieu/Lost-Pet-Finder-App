create table public.pet_reports (
    id uuid primary key default gen_random_uuid(),
    user_id uuid references public.profiles(id) on delete set null,
    breed text,
    description text,
    photo_url text,
    location_text text,
    latitude float8,
    longitude float8,
    created_at timestamp default now()
)