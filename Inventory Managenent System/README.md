# Inventory Management System (Backend)

### Backend:
- Deployed on Render: [Backend URL](https://inventory-management-system-qya3.onrender.com/)

This project is a backend service for an Inventory Management System. It provides functionality for managing inventory items, suppliers, and importing/exporting data via CSV.

## Table of Contents

- [API Documentation](#api-documentation)
  - [Inventory API](#inventory-api)
  - [Supplier API](#supplier-api)
  - [CSV API](#csv-api)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [Environment Variables](#environment-variables)


## API Documentation
### Inventory API
1. Get all inventory items
- Endpoint: GET /api/inventory/
- Description: Retrieves a list of all inventory items, including details about the suppliers.
2. Add new inventory item
- Endpoint: POST /api/inventory/
3. Update inventory item
- Endpoint: PUT /api/inventory/:id
4. Delete inventory item
- Endpoint: DELETE /api/inventory/:id

### Supplier API
1. Get all suppliers
- Endpoint: GET /api/suppliers/
2. Add a new supplier
- Endpoint: POST /api/suppliers/
3. Update supplier information
- Endpoint: PUT /api/suppliers/:id
4. Delete a supplier
- Endpoint: DELETE /api/suppliers/:id

### CSV API
1. Export inventory data to CSV
- Endpoint: GET /api/inventory/csv/export
- Description: Exports the inventory data to a CSV file and triggers a download.
- Response: Triggers a file download (inventory.csv).

2. Import inventory data from CSV
- Endpoint: POST /api/inventory/csv/import
- Request Body: Form-data with a file (file) attached. The file should be a CSV containing inventory data.

# Technologies Used

- Node.js: JavaScript runtime for building the backend.
- Express: Web framework for routing and handling HTTP requests.
- MongoDB: NoSQL database for storing inventory and supplier data.
- Mongoose: MongoDB object modeling for Node.js.
- Multer: Middleware for handling file uploads.
- json2csv: Library for converting JSON data to CSV format.
- csv-parser: Library for parsing CSV files.



