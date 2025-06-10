# ⚡ Energy Consumption & GHG Emissions Tracker

A simple full-stack web application that allows users to track their electricity usage and automatically calculates the corresponding Greenhouse Gas (GHG) emissions based on a standard conversion factor.

## 🌐 Live Demo

Frontend: https://energy-tracker-one.vercel.app/  
Backend: https://energytrackerapi.onrender.com

---

## 📋 Features

- ✅ Intuitive energy usage entry form
- ✅ Automatic calculation of GHG emissions (`kWh * 0.45`)
- ✅ Summary view of total usage and emissions
- ✅ View all past entries in a responsive table
- ✅ Navigation and user feedback via toast notifications
- ✅ Clean and responsive UI using Tailwind CSS

---

## 🛠 Tech Stack

### Frontend
- React
- React Router DOM
- Axios
- Tailwind CSS
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Hosted on Render

---

## ⚙️ Setup Instructions

### 🔧 Prerequisites

- Node.js and npm
- MongoDB (locally or MongoDB Atlas)
- Git

### 🔄 Clone the Repository

```bash
git clone https://github.com/your-username/energyTracker.git
cd energyTracker

### 🔧 Install Dependencies
#For backend
cd backend
npm install
#For frontend
cd frontend
npm install

###🔑 Environment Variables
Create a .env file inside /backend:
PORT=5000
MONGODB_URI=your_mongodb_connection_string


### ▶️ Run Locally
->Start Backend
cd backend
npm start
->Start Frontend
cd frontend
npm run dev

### 📊 GHG Emission Formula
GHG Emissions (kg CO2e) = Total Usage (kWh) × 0.45


📌 Assumptions & Notes
The app assumes entries are submitted monthly.

No user login or authentication is implemented (focus was on core features).

CORS has been enabled on the backend to allow frontend communication.



🚀 Future Enhancements
📅 Month-on-month comparison charts

📈 Emissions visualization using charts (e.g., Recharts or Chart.js)

👤 User authentication and account-based data

🌍 Support for regional emission factors

👩‍💻 Author
Fuzail Rizvi
GitHub: @fuzailrizvi
