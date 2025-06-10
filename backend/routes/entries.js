import express from 'express';
import EnergyEntry from '../models/Entry.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { billDate, numberOfDays, totalUsage } = req.body;

    if (!billDate || !numberOfDays || !totalUsage) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const ghgEmissions = totalUsage * 0.45;

    const newEntry = new EnergyEntry({
      billDate,
      numberOfDays,
      totalUsage,
      ghgEmissions,
    });

    const savedEntry = await newEntry.save();

    res.status(201).json(savedEntry);
  } catch (error) {
    console.error('Error creating entry:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


router.get('/', async (req, res) => {
  try {
    const entries = await EnergyEntry.find().sort({ createdAt: -1 });
    res.json(entries);
  } catch (error) {
    console.error('Error fetching entries:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;