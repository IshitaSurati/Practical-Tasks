import React, { useState, useEffect } from "react";
import { addSupplier, updateSupplier } from "../services/supplierService";
import { toast } from "react-toastify";

const SupplierForm = ({ fetchSuppliers, editSupplier, setEditSupplier }) => {
  const [formData, setFormData] = useState({ name: "", contact: "" });

  useEffect(() => {
    if (editSupplier) setFormData(editSupplier);
    else setFormData({ name: "", contact: "" });
  }, [editSupplier]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editSupplier) {
        await updateSupplier(editSupplier._id, formData);
        toast.success("Supplier updated!");
      } else {
        await addSupplier(formData);
        toast.success("Supplier added!");
      }
      fetchSuppliers();
      setEditSupplier(null);
    } catch (err) {
      toast.error("Failed to save supplier");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <div className="row">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Supplier Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Contact Details"
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            required
          />
        </div>
        <div className="col-md-4">
          <button type="submit" className="btn btn-primary">
            {editSupplier ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default SupplierForm;
