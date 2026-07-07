# 🚀 Render Deployment Guide — Zerodha Clone

This guide walks you through deploying all **three services** of this monorepo on [Render.com](https://render.com).

| Service | Type | Directory | Local Port |
|---------|------|-----------|------------|
| **Backend** | Node.js Web Service | `backend/` | `3002` |
| **Frontend** | Static Site (React) | `frontend/` | `3000` |
| **Dashboard** | Static Site (React) | `dashboard/` | `4000` |

---

## 📋 Prerequisites

- ✅ A [Render account](https://render.com) (free tier works)
- ✅ Your project pushed to a **GitHub** or **GitLab** repository
- ✅ A MongoDB Atlas cluster (already configured)
- ✅ Node.js 18+ (Render uses this by default)

---

## ⚠️ Before You Deploy — Required Changes

### 1. Fix the Backend `start` Script

Render does **not** have `nodemon` in production. Update `backend/package.json`:

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js",
  "seed": "node seed.js"
}
```

### 2. Ensure `.env` is in `.gitignore`

Make sure `backend/.env` is NOT committed to git:

```
node_modules/
.env
```

### 3. Replace Hardcoded `localhost` API URLs

In your frontend and dashboard source code, replace any hardcoded localhost URLs with an environment variable. For example:

```js
// ❌ Before (hardcoded)
const res = await axios.get("http://localhost:3002/allHoldings");

// ✅ After (dynamic)
const res = await axios.get(`${process.env.REACT_APP_API_URL}/allHoldings`);
```

---

## 🛠️ Step 1 — Deploy the Backend (Web Service)

### 1.1 Create a New Web Service on Render

1. Go to [dashboard.render.com](https://dashboard.render.com)
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub/GitLab repository
4. Configure the service:

| Setting | Value |
|---------|-------|
| **Name** | `zerodha-backend` |
| **Root Directory** | `backend` |
| **Runtime** | `Node` |
| **Build Command** | `npm install` |
| **Start Command** | `node index.js` |
| **Instance Type** | `Free` |

### 1.2 Add Environment Variables

In the **"Environment"** tab on Render, add these key-value pairs:

| Key | Value |
|-----|-------|
| `PORT` | `3002` |
| `MONGO_URL` | *(your MongoDB Atlas connection string)* |
| `SESSION_SECRET` | *(a strong random string)* |
| `JWT_SECRET` | *(a strong random string)* |
| `NODE_ENV` | `production` |

> **⚠️ SECURITY WARNING**: Change `SESSION_SECRET` and `JWT_SECRET` to strong random
> values before deploying. Never use weak secrets in production.
> Also consider rotating your MongoDB password if `.env` was ever committed to Git.

### 1.3 CORS Update (Important!)

After your frontend and dashboard are deployed, update `backend/index.js` with their live URLs:

```js
app.use(cors({
  origin: [
    "https://zerodha-frontend.onrender.com",
    "https://zerodha-dashboard.onrender.com",
    "http://localhost:3000",
    "http://localhost:4000"
  ],
  credentials: true
}));
```

### 1.4 Deploy

Click **"Create Web Service"**. Render will build and deploy automatically.

📌 Your backend URL will look like: `https://zerodha-backend.onrender.com`

---

## 🛠️ Step 2 — Deploy the Frontend (Static Site)

### 2.1 Create a New Static Site

1. Click **"New +"** → **"Static Site"**
2. Connect your repository
3. Configure the site:

| Setting | Value |
|---------|-------|
| **Name** | `zerodha-frontend` |
| **Root Directory** | `frontend` |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `build` |

### 2.2 Add Environment Variables

| Key | Value |
|-----|-------|
| `REACT_APP_API_URL` | `https://zerodha-backend.onrender.com` |

### 2.3 Add a Redirect Rule (for React Router)

React Router requires all routes to serve `index.html`. In the **"Redirects/Rewrites"** tab:

| Source | Destination | Action |
|--------|-------------|--------|
| `/*` | `/index.html` | **Rewrite** |

### 2.4 Deploy

Click **"Create Static Site"**.

📌 Your frontend URL: `https://zerodha-frontend.onrender.com`

---

## 🛠️ Step 3 — Deploy the Dashboard (Static Site)

### 3.1 Create Another Static Site

1. Click **"New +"** → **"Static Site"**
2. Connect your repository
3. Configure the site:

| Setting | Value |
|---------|-------|
| **Name** | `zerodha-dashboard` |
| **Root Directory** | `dashboard` |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `build` |

### 3.2 Add Environment Variables

| Key | Value |
|-----|-------|
| `REACT_APP_API_URL` | `https://zerodha-backend.onrender.com` |

### 3.3 Add Redirect Rule

Same as frontend — in **"Redirects/Rewrites"**:

| Source | Destination | Action |
|--------|-------------|--------|
| `/*` | `/index.html` | **Rewrite** |

### 3.4 Deploy

Click **"Create Static Site"**.

📌 Your dashboard URL: `https://zerodha-dashboard.onrender.com`

---

## 🔐 MongoDB Atlas — Allow All IPs

Render's free tier uses **dynamic IPs**, so you must whitelist all IPs in MongoDB Atlas:

1. Go to [cloud.mongodb.com](https://cloud.mongodb.com)
2. Click **Network Access** → **Add IP Address**
3. Click **"Allow Access from Anywhere"** → type `0.0.0.0/0`
4. Click **Confirm**

---

## 🔁 Auto-Deploy

Render auto-deploys on every push to your main branch by default. You can configure this under:
**Service → Settings → Auto-Deploy**

---

## ✅ Verification Checklist

After deploying all three services, verify the following:

- [ ] **Backend health**: Visit `https://zerodha-backend.onrender.com/allHoldings` — returns JSON
- [ ] **Frontend loads**: Visit `https://zerodha-frontend.onrender.com` — landing page appears
- [ ] **Dashboard loads**: Visit `https://zerodha-dashboard.onrender.com` — dashboard appears
- [ ] **Auth works**: Try signing up / logging in from the frontend
- [ ] **Data loads in dashboard**: Holdings, positions, and orders display correctly
- [ ] **No CORS errors** in browser console (F12 → Console tab)

---

## 🐛 Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| **Build fails** | Check Render build logs; ensure `node_modules` is in `.gitignore` |
| **`nodemon` not found** | Change start script to `node index.js` (see Step 0) |
| **CORS error in browser** | Add deployed frontend/dashboard URLs to `cors({ origin: [...] })` |
| **MongoDB connection fails** | Whitelist `0.0.0.0/0` in MongoDB Atlas → Network Access |
| **Blank page on React app** | Add the `/* → /index.html` Rewrite rule in Render Static Site settings |
| **API calls return 404** | Ensure `REACT_APP_API_URL` env var is set and no trailing slash |
| **Backend sleeps (free tier)** | Free tier spins down after 15 min idle; first request may take ~30s |

---

## 📁 Project Structure Summary

```
Zerodha/
├── backend/          → Node.js + Express API        (Render: Web Service)
│   ├── index.js
│   ├── package.json
│   ├── routes/
│   ├── model/
│   └── controllers/
├── frontend/         → React (Landing Page)         (Render: Static Site)
│   ├── src/
│   └── package.json
└── dashboard/        → React (Trading Dashboard)    (Render: Static Site)
    ├── src/
    └── package.json
```

---

## 🎉 Final Live URLs

Once deployed, your app will be available at:

| Service | URL |
|---------|-----|
| 🌐 Landing Page | `https://zerodha-frontend.onrender.com` |
| 📊 Dashboard | `https://zerodha-dashboard.onrender.com` |
| ⚙️ Backend API | `https://zerodha-backend.onrender.com` |
