import { useNavigate } from "react-router-dom";
import Summary from "./Summary";

const EntryTable = ({ entries }) => {
  const navigate = useNavigate();

  if (entries.length === 0)
    return (
      <div className="text-center mt-12 text-gray-600 text-lg">
        No entries yet. <br />
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add New Entry
        </button>
      </div>
    );

  return (
    
    <div className="mt-10 max-w-5xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <Summary entries={entries}/>
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">📊 Energy Usage Entries</h1>

      <div className="flex justify-end mb-4">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 hover:cursor-pointer"
        >
          + Add New Entry
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-gray-100 text-gray-700 text-left">
            <tr>
              <th className="border-b p-3">Bill Date</th>
              <th className="border-b p-3">Days</th>
              <th className="border-b p-3">Usage (kWh)</th>
              <th className="border-b p-3">GHG Emissions (kg CO2e)</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <tr key={entry._id} className="hover:bg-gray-50 transition-colors">
                <td className="p-3 border-b">{new Date(entry.billDate).toLocaleDateString()}</td>
                <td className="p-3 border-b">{entry.numberOfDays}</td>
                <td className="p-3 border-b">{entry.totalUsage}</td>
                <td className="p-3 border-b">{entry.ghgEmissions.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EntryTable;
