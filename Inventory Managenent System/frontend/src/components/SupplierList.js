import React, { useEffect, useState } from "react";
import { getSuppliers, deleteSupplier } from "../services/supplierService";
import SupplierForm from "./SupplierForm";
import { ToastContainer, toast } from "react-toastify";

const SupplierList = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [editSupplier, setEditSupplier] = useState(null);

  const fetchSuppliers = async () => {
    const data = await getSuppliers();
    setSuppliers(data);
  };

  const handleDelete = async (id) => {
    try {
      await deleteSupplier(id);
      toast.success("Supplier deleted!");
      fetchSuppliers();
    } catch (err) {
      toast.error("Failed to delete supplier");
    }
  };

  useEffect(() => {
    fetchSuppliers();
  }, []);

  return (
    <div className="container mt-5">
      <ToastContainer />
      <h2>Suppliers</h2>
      <SupplierForm fetchSuppliers={fetchSuppliers} editSupplier={editSupplier} setEditSupplier={setEditSupplier} />
      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <tr key={supplier._id}>
              <td>{supplier.name}</td>
              <td>{supplier.contact}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => setEditSupplier(supplier)}>
                  Edit
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(supplier._id)}>
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

export default SupplierList;
