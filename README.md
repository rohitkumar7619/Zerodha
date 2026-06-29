# Zerodha Clone Project

A MERN (MongoDB, Express, React, Node.js) clone of the Zerodha trading platform. The project is divided into three components:
1. **Backend**: Express API server managing stock data and database connections.
2. **Dashboard**: React application containing the authenticated user experience (Watchlist, Holdings, Positions, Orders, and Funds).
3. **Frontend**: React application for the public landing pages (Home, About, Products, Pricing, and Support).

---

## Project Structure

```text
Zerodha/
├── backend/       # Node.js/Express server (runs on Port 3002)
├── dashboard/     # React dashboard frontend (Kite interface)
└── frontend/      # React public landing page frontend
```

---

## Prerequisites

Ensure you have the following installed on your machine:
* [Node.js](https://nodejs.org/) (v16 or higher recommended)
* [npm](https://www.npmjs.com/) (installed with Node.js)
* [MongoDB](https://www.mongodb.com/) (either a local instance or a MongoDB Atlas cloud URI)

---

## Getting Started

Follow these steps to set up and run the project locally.

### Step 1: Database Setup and Seeding

1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Open the `.env` file and set your `MONGO_URL` connection string:
   ```env
   PORT=3002
   MONGO_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?appName=Cluster0
   ```
   > [!NOTE]
   > The port has been configured to **3002** to match the frontend components' API request configuration.

3. Seed the database with initial holdings and positions data:
   ```bash
   npm run seed
   ```
   This will populate the database with default holdings (`BHARTIARTL`, `HDFCBANK`, `INFY`, etc.) and positions (`EVEREADY`, `JUBLFOOD`) so that the dashboard loads with visual charts and lists.

---

### Step 2: Running the Services

You need to run the backend, dashboard, and frontend servers. We recommend opening three separate terminal windows/tabs.

#### 1. Start the Backend API Server
```bash
cd backend
npm start
```
* **Endpoint**: `http://localhost:3002`
* Starts with `nodemon` for hot reloading.

#### 2. Start the Dashboard (Kite) Frontend
```bash
cd dashboard
npm start
```
* **Endpoint**: Runs on `http://localhost:3001` (or `http://localhost:3000` if free)
* Allows searching the Watchlist, adding new mock buy orders, and visualizing portfolio holdings/positions with interactive charts.

#### 3. Start the Public Frontend (Landing Page)
```bash
cd frontend
npm start
```
* **Endpoint**: Runs on `http://localhost:3000` (or `http://localhost:3001` if free)
* Serves the public website showcasing pricing, products, and support pages.

---

## Major Fixes Implemented

We resolved critical errors to ensure a seamless starting experience:

1. **React Context Bug Fix (`dashboard/src/components/BuyActionWindow.js`)**:
   * **Problem**: The Buy/Cancel action window attempted to close itself by directly calling `GeneralContext.closeBuyWindow()`, which resulted in a `TypeError` crash.
   * **Resolution**: Imported and used React's `useContext` hook (`useContext(GeneralContext)`) to properly call the callback function on the provider value.

2. **Backend Server Port Alignment (`backend/.env`)**:
   * **Problem**: The backend port was set to `5000` in `.env`, but the React components fetched data directly from `http://localhost:3002/...`.
   * **Resolution**: Updated `PORT=3002` in `backend/.env` to allow components to connect out of the box.

3. **Added Database Seeding (`backend/seed.js`)**:
   * **Problem**: When starting with a fresh database connection, there was no holdings or positions data to display on the dashboard graphs.
   * **Resolution**: Added a `seed.js` script with dummy dataset matching the original app mock data to easily seed the MongoDB server.
