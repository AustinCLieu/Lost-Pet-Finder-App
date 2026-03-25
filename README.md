# Lost-Pet-Finder-App
A shared lost pet sightings app where users upload a photo, description, and GPS location of a lost pet they've come across, and owners search through the sightings to trace where their missing pet was last reported

Using:
React native + expo 
Supabase/postgresql

The only thing you need to handle in your app is that user_id can now be null — so when you display "reported by..." on a card, you check for that:
const reportedBy = report.user_id ? report.profiles?.display_name : 'Anonymous'


Steps done:
Supabase:
- set up mobile frontend using expo
- created supabase tables in supabase dashboard
- created storage bucket for pet photos in supabase dashboard
- setting up Row Level Security (RLS) 
- RLS is a security layer that controls what roles a user can see and modify in a table
- For Profiles table, users can see all profiles, insert only their own profile, and update only their own profile
- Put Supabase project URL and anon key into mobile/.en
- Download supabase.js client and AsyncStorage which saves the user's login session so they stay logged in between app opens 
- Make supabase.ts in mobile/lib
- supabase.ts is a file that creates a connection to Supabase project so that I can import supabase and use it to read/write data
- Without it, I wouldn't be able to reach supabase 
- Tested in index.tsx by importing supabase connection, running a query to get pet reports table, which should be empty, and returned num of rows which was 0 (correct because empty table)

ML Classifier:
- Using python 3.13, venv
- Added root gitignore and venv to it
- Changed to venv 3.12
- Adding CLAUDE.md file
- Added (auth) expo router group and (tabs) expo router group
- Added files for auth and in app tabs/features
- Added [id].tsx in pet/ which makes a dynamic route. Instead of making a separate file for every single pet report (pet/1.tsx, pet/2.tsx, /et/3.tsx, ...) you write one file [id].tsx and expo fills in id with whatever value is in the url
- Set up basic auth functions in auth.ts but need to change to match the user info better for sql tables in supabase



Idea from Dad:
can api to use a model like chatgpt and see a pet report table 
