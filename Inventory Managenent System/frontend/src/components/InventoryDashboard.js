import React, { useEffect, useState } from "react";
import { getInventory, deleteInventory } from "../services/inventoryService";
import { ToastContainer, toast } from "react-toastify";
import InventoryForm from "./InventoryForm";

const InventoryDashboard = () => {
  const [inventory, setInventory] = useState([]);
  const [editItem, setEditItem] = useState(null);

  const fetchInventory = async () => {
    const data = await getInventory();
    setInventory(data);
  };

  const handleDelete = async (id) => {
    try {
      await deleteInventory(id);
      toast.success("Item deleted!");
      fetchInventory();
    } catch (err) {
      toast.error("Failed to delete item");
    }
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  return (
    <div className="container">
      <ToastContainer />
      <h2 className="my-4">Inventory Dashboard</h2>
      <InventoryForm fetchInventory={fetchInventory} editItem={editItem} setEditItem={setEditItem} />
      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Supplier</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item._id} className={item.quantity < 5 ? "table-danger" : "table-success"}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.category}</td>
              <td>{item.supplier?.name || "N/A"}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => setEditItem(item)}>
                  Edit
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryDashboard;
