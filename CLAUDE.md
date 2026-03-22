# Lost Pet Finder - Project Context

## Stack
- **Frontend:** React Native + Expo + Typescript (Expo Router for navigation)
- **Backend:** Supabase (dashboard workflow - no CLI)
- **L Service:** Python 3.12.10 in a venv, FastAPI, Tensorflow, CNN breed classifier
- **Deployment:** ML service deployed to Render or Railway via Docker (not sure on deploymeny yet)
- **Dockerize everything after:**

## Monorepo Structure
LostPetFinder/
├── mobile/           # React Native + Expo app
├── Supabase/         # SQL migration files + RLS policy files (reference only — run in dashboard)
├── MLclassification/ # Python FastAPI server + CNN model

## Key Decisions Made
- Using Supabase dashboard (not CLI) for all database changes
- SQL files in Supabase/migrations/ are records only — not auto-run
- profiles uses ON DELETE CASCADE (profile deleted when user deleted)
- pet_reports uses ON DELETE SET NULL on user_id (reports survive if user deletes account — sigthings remain useful)
- Automatic RLS is enabled — all tables locked by default

## Database Tables
- auth.users — managed by Supabase, never touched directly
- public.profiles - id (PK + FK to auth.users), display_name, avatar_url, created_at
- public.pet_reports - id (PK), user_id (FK to profiles, set null on delete), breed, description, photo_url, location_text, latitude, longitude, created_at

## Mobile App Structure (mobile/)
- app/(auth)/ — login.tsx, signup.tsx (no tab bar)
- app/(tabs)/ — index.tsx (feed), report.tsx, sightings.tsx, map.tsx
- app/pet/[id].tsx — detail page
- lib — supabsae.ts, auth.ts, pets.ts, storage.ts, breedClassifier.ts
components/ — PetCard.tsx, PhotoPicker.tsx, LocationPicker.tsx, BreedBadge.tsx, Button.tsx
- context\AuthContent.tsx — global auth state

## ML Service (MLclassification/)
- Python 3.12.10 inside a venv
- Activate with: source venv\bin\activate (Mac/Linux) or venv\Scripts\activate (Windows)
- Dependencies in requirements.txt — install with: pip install -r requirements.txt
- main.py — FastAPI app, POST /classify endpoint
- model.py — loads breed_cnn.h5 on startup, runs predictions
- preprocess.py — resizes + normalizes images to model input size
- model/breed_cnn.h5 — trained CNN weights (not in git)
- model/classes.json — breed name list ["Labrador", "Poodle", ...]
- training/ — local only, never deployed (train.py, evaluate.py, dataset/)

## Environment Variables
mobile/LostPetFinder/.env:
  EXPO_PUBLIC_SUPABASE_URL=
  EXPO_PUBLIC_SUPABASE_ANON_KEY=
  EXPO_PUBLIC_ML_API_URL=

## Current Milestone
- [x] M1 Project setup + Expo app
- [x] M2 Set up Supabase
- [ ] M3 Build authentication
- [ ] M4 Build core screens
- [ ] M5 Build + train CNN model
- [ ] M6 Build + deploy ML API server
- [ ] M7 Connect ML + polish + ship