import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';


dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
connectDB();

app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
  res.send('Energy Tracker API is running');
});
app.listen(PORT, () => {
    console.log(`Server is runing on http://localhost:${PORT}`);
});
