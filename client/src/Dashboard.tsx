import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <div className="bg-white p-6 rounded-lg shadow-md">Widget 1</div>
        <div className="bg-white p-6 rounded-lg shadow-md">Widget 2</div>
        <div className="bg-white p-6 rounded-lg shadow-md">Widget 3</div>
      </div>
    </div>
  );
};

export default Dashboard;
