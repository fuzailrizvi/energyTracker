const Summary = ({ entries }) => {
  if (!entries.length) return null;

  const totalUsage = entries.reduce((sum, entry) => sum + entry.totalUsage, 0);
  const totalEmissions = entries.reduce((sum, entry) => sum + entry.ghgEmissions, 0);
    if (totalUsage === 0 && totalEmissions === 0) return null;

  return (
    <div className="mb-6 bg-blue-50 p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">📊 Summary</h2>
      <ul className="space-y-1 text-gray-700 text-sm">
        <li><strong>Total Entries:</strong> {entries.length}</li>
        <li><strong>Total Usage:</strong> {totalUsage.toFixed(2)} kWh</li>
        <li><strong>Total GHG Emissions:</strong> {totalEmissions.toFixed(2)} kg CO₂e</li>
      </ul>
    </div>
  );
};

export default Summary;