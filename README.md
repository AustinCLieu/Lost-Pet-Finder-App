# Lost-Pet-Finder-App
A shared lost pet sightings app where users upload a photo, description, and GPS location of a lost pet they've come across, and owners search through the sightings to trace where their missing pet was last reported

Using:
React native + expo 
Supabase/postgresql

The only thing you need to handle in your app is that user_id can now be null — so when you display "reported by..." on a card, you check for that:
const reportedBy = report.user_id ? report.profiles?.display_name : 'Anonymous'


Steps done:
set up mobile frontend using expo
created supabase tables in supabase dashboard
created storage bucket for pet photos in supabase dashboard


