import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const EntryForm = ({ onNewEntry }) => {
    const [form, setForm] = useState({
        billDate: "",
        numberOfDays: "",
        totalUsage: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post("http://localhost:5000/api/entries", form);
            onNewEntry(response.data);
            setForm({ billDate: "", numberOfDays: "", totalUsage: "" });
        } catch (err) {
            setError("Error submitting data. Please try again.");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-lg mx-auto space-y-5 transition-all duration-300 ease-in-out hover:shadow-lg"
        >
            <h2 className="text-2xl font-bold text-center text-gray-800">Add Energy Usage</h2>

            {/* Bill Date */}
            <div>
                <label htmlFor="billDate" className="block text-sm font-medium mb-1 text-gray-700">
                    Bill Date
                </label>
                <input
                    type="date"
                    name="billDate"
                    id="billDate"
                    value={form.billDate}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>

            {/* Number of Days */}
            <div>
                <label htmlFor="numberOfDays" className="block text-sm font-medium mb-1 text-gray-700">
                    Number of Days
                </label>
                <input
                    type="number"
                    name="numberOfDays"
                    id="numberOfDays"
                    value={form.numberOfDays}
                    onChange={handleChange}
                    min="1"
                    className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>

            {/* Total Usage */}
            <div>
                <label htmlFor="totalUsage" className="block text-sm font-medium mb-1 text-gray-700">
                    Total Usage (kWh)
                </label>
                <input
                    type="number"
                    name="totalUsage"
                    id="totalUsage"
                    value={form.totalUsage}
                    onChange={handleChange}
                    min="0"
                    className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>

            {/* Error Message */}
            {error && <p className="text-red-600 text-sm font-medium">{error}</p>}

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-colors duration-200 hover:cursor-pointer"
            >
                Submit Entry
            </button>
            <p className="text-sm text-center text-gray-600 mt-4">
                Want to view entries?{" "}
                <Link to="/entries" className="text-blue-600 underline hover:text-blue-800">
                    Click here
                </Link>
            </p>
        </form>
    );
};

export default EntryForm;
