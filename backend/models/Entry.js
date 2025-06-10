import mongoose from "mongoose";

const energyEntrySchema = new mongoose.Schema(
  {
    billDate: {
      type: Date,
      required: true,
    },
    numberOfDays: {
      type: Number,
      required: true,
    },
    totalUsage: {
      type: Number,
      required: true,
    },
    ghgEmissions: {
      type: Number, // in kg CO2e
      required: true,
    },
  },
  { timestamps: true }
);

const EnergyEntry = mongoose.model("EnergyEntry", energyEntrySchema);

export default EnergyEntry;
