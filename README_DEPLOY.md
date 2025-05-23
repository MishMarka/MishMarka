# Deployment Guide for MishMarka

## 1. Deploy as Node.js Backend (Render/Railway/Heroku)

1. Push your code to GitHub.
2. Create an account on [Render](https://render.com/) (or Railway/Heroku).
3. Create a new Web Service, connect your GitHub repo, and set the start command to:
   ```
   npx ts-node src/app.ts
   ```
4. Set your environment variables (SUPABASE_URL, SUPABASE_KEY, HUGGING_FACE_API_KEY, etc.) in the dashboard.
5. Deploy!

---

## 2. Deploy as Netlify Functions (Serverless API)

1. Your API endpoints are now in `netlify/functions/` as serverless functions.
2. The `netlify.toml` file is configured to route API calls to these functions.
3. To deploy:
   - Push your code to GitHub.
   - Create a new site on [Netlify](https://netlify.com/) and link your repo.
   - Set your environment variables in the Netlify dashboard.
   - Deploy!
4. Your API endpoints will be available at:
   - `/.netlify/functions/createManga` (POST)
   - `/.netlify/functions/getManga?id=...` (GET)
   - `/.netlify/functions/translateText` (POST)
   - Or via the `/api/manga/*` routes as defined in `netlify.toml`.

---

## 3. Frontend (Optional)
If you have a frontend, place your static files in a `public/` folder. Netlify will serve these automatically.

---

## 4. Environment Variables
Set these in your Netlify or Render/Railway/Heroku dashboard:
- SUPABASE_URL
- SUPABASE_KEY
- HUGGING_FACE_API_KEY

---

## 5. Local Development (Netlify)
Install the Netlify CLI:
```
npm install -g netlify-cli
```
Run locally:
```
netlify dev
```
