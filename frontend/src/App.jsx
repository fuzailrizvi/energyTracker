import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import EntryForm from "./components/EntryForm"
import EntryTable from "./components/EntryTable";


function App() {
  const [entries, setEntries] = useState([]);
  const navigate = useNavigate();

  const fetchEntries = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/entries");
      setEntries(res.data);
    } catch (err) {
      console.error("Failed to fetch entries");
      toast.error("Failed to fetch entries. Please try again later.");
    }
  };
  useEffect(() => {
    fetchEntries();
  }, []);
  const handleNewEntry = (entry) => {
    if (!entry) return;
    setEntries((prev) => [entry, ...prev]);
    toast.success("New entry added successfully!");
    navigate("/entries");
  };
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Toaster position="top-right" reverseOrder={false} />
      <h1 className="text-3xl font-bold text-center mb-6">⚡ Energy Tracker</h1>
      <Routes>
        <Route
          path="/"
          element={
            <EntryForm onNewEntry={handleNewEntry} />

          }
        />

        <Route
          path="/entries"
          element={<EntryTable entries={entries} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

    </div>
  )
}

export default App
