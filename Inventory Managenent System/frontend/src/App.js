import React from "react";
import InventoryDashboard from "./components/InventoryDashboard";
import SupplierList from "./components/SupplierList";

const App = () => {
  return (
    <div>
      <InventoryDashboard />
      <SupplierList />
    </div>
  );
};

export default App;
