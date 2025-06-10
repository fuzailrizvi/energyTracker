<<<<<<< HEAD
# ⚡ Energy Consumption & GHG Emissions Tracker

A simple full-stack web application that allows users to record their electricity consumption and automatically calculates the corresponding Greenhouse Gas (GHG) emissions using a standardized emission factor.

## 🌐 Live Demo

- **Frontend:** [https://energy-tracker-one.vercel.app/](https://energy-tracker-one.vercel.app/)
- **Backend:** [https://energytrackerapi.onrender.com/](https://energytrackerapi.onrender.com/)

---

## 📋 Features

- ✅ Intuitive data entry form for electricity usage
- ✅ Calculates GHG emissions using: `GHG = kWh × 0.45`
- ✅ Displays all entries in a clean, responsive table
- ✅ Summary section for total usage and emissions
- ✅ Toast notifications for user feedback
- ✅ Responsive UI built with Tailwind CSS

---

## 🛠 Tech Stack

### Frontend

- React
- React Router DOM
- Axios
- Tailwind CSS
- React Hot Toast
- Deployed on Vercel

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- Deployed on Render

---

## ⚙️ Setup Instructions

### 🔧 Prerequisites

- Node.js & npm
- MongoDB (local or Atlas)
- Git

### 🌀 Clone the Repository

```bash
git clone https://github.com/fuzailrizvi/energyTracker.git
cd energyTracker
📦 Install Dependencies
Backend
bash
Copy
Edit
cd backend
npm install
Frontend
bash
Copy
Edit
cd frontend
npm install
🔑 Environment Variables
Create a .env file inside the backend/ folder:

env
Copy
Edit
PORT=5000
MONGODB_URI=your_mongodb_connection_string
▶️ Run Locally
Start Backend
bash
Copy
Edit
cd backend
npm start
Start Frontend
bash
Copy
Edit
cd frontend
npm run dev
📊 Emissions Formula
GHG Emissions (kg CO₂e) = Total Usage (kWh) × 0.45

We use a fixed emission factor of 0.45 kg CO₂e/kWh.

📌 Assumptions & Design Decisions
This app is designed for individual or facility energy tracking.

Entries are stored monthly; no login system is required.

Used simple and clean UI with mobile responsiveness.

Backend uses basic CORS and JSON middleware.

GHG emissions are calculated server-side for consistency.

🚀 Future Enhancements
📈 Add charts for month-on-month comparison

🔐 Add user authentication and user-specific data

🌍 Support for regional emission factors

💾 Export to CSV or Excel

📱 Fully responsive mobile-first redesign

👨‍💻 Author
Fuzail Rizvi
GitHub: @fuzailrizvi

📄 License
This project is open source and available under the MIT License.
=======

>>>>>>> e8703bff74191adf37ccdc802755a95c01149896
