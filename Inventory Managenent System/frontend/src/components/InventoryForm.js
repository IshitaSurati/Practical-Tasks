import React, { useState, useEffect } from "react";
import { addInventory, updateInventory } from "../services/inventoryService";
import { getSuppliers } from "../services/supplierService";
import { toast } from "react-toastify";

const InventoryForm = ({ fetchInventory, editItem, setEditItem }) => {
  const [formData, setFormData] = useState({ name: "", quantity: 0, category: "", supplier: "" });
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    if (editItem) setFormData(editItem);
    else setFormData({ name: "", quantity: 0, category: "", supplier: "" });

    const fetchSuppliers = async () => {
      const data = await getSuppliers();
      setSuppliers(data);
    };
    fetchSuppliers();
  }, [editItem]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editItem) {
        await updateInventory(editItem._id, formData);
        toast.success("Item updated!");
      } else {
        await addInventory(formData);
        toast.success("Item added!");
      }
      fetchInventory();
      setEditItem(null);
    } catch (err) {
      toast.error("Failed to save item");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Item Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="col-md-2">
          <input
            type="number"
            className="form-control"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            required
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            required
          />
        </div>
        <div className="col-md-3">
          <select
            className="form-control"
            value={formData.supplier}
            onChange={(e) => setFormData({ ...formData, supplier: e.target.value })}
          >
            <option value="">Select Supplier</option>
            {suppliers.map((supplier) => (
              <option key={supplier._id} value={supplier._id}>
                {supplier.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-1">
          <button type="submit" className="btn btn-primary">
            {editItem ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default InventoryForm;
