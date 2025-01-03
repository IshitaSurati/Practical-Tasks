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

---

## API Documentation

### Inventory API

#### 1. **Get all inventory items**
- **Method**: `GET`
- **Endpoint**: `/api/inventory/`
- **Description**: Retrieves a list of all inventory items, including details about the suppliers.
- **Request Body**: None
- **Response Body**:
    ```json
    [
      {
        "id": "12345",
        "name": "Item 1",
        "quantity": 50,
        "supplierId": "67890",
        "supplier": {
          "id": "67890",
          "name": "Supplier 1",
          "contact": "123-456-7890"
        }
      },
      {
        "id": "67891",
        "name": "Item 2",
        "quantity": 30,
        "supplierId": "67891",
        "supplier": {
          "id": "67891",
          "name": "Supplier 2",
          "contact": "987-654-3210"
        }
      }
    ]
    ```

#### 2. **Add new inventory item**
- **Method**: `POST`
- **Endpoint**: `/api/inventory/`
- **Request Body**:
    ```json
    {
      "name": "New Item",
      "quantity": 100,
      "supplierId": "67890"
    }
    ```
- **Response Body**:
    ```json
    {
      "id": "12346",
      "name": "New Item",
      "quantity": 100,
      "supplierId": "67890"
    }
    ```

#### 3. **Update inventory item**
- **Method**: `PUT`
- **Endpoint**: `/api/inventory/:id`
- **Request Body**:
    ```json
    {
      "name": "Updated Item Name",
      "quantity": 75,
      "supplierId": "67891"
    }
    ```
- **Response Body**:
    ```json
    {
      "id": "12345",
      "name": "Updated Item Name",
      "quantity": 75,
      "supplierId": "67891"
    }
    ```

#### 4. **Delete inventory item**
- **Method**: `DELETE`
- **Endpoint**: `/api/inventory/:id`
- **Request Body**: None
- **Response Body**:
    ```json
    {
      "message": "Inventory item deleted successfully."
    }
    ```

---

### Supplier API

#### 1. **Get all suppliers**
- **Method**: `GET`
- **Endpoint**: `/api/suppliers/`
- **Request Body**: None
- **Response Body**:
    ```json
    [
      {
        "id": "67890",
        "name": "Supplier 1",
        "contact": "123-456-7890"
      },
      {
        "id": "67891",
        "name": "Supplier 2",
        "contact": "987-654-3210"
      }
    ]
    ```

#### 2. **Add a new supplier**
- **Method**: `POST`
- **Endpoint**: `/api/suppliers/`
- **Request Body**:
    ```json
    {
      "name": "New Supplier",
      "contact": "555-123-4567"
    }
    ```
- **Response Body**:
    ```json
    {
      "id": "67892",
      "name": "New Supplier",
      "contact": "555-123-4567"
    }
    ```

#### 3. **Update supplier information**
- **Method**: `PUT`
- **Endpoint**: `/api/suppliers/:id`
- **Request Body**:
    ```json
    {
      "name": "Updated Supplier",
      "contact": "555-987-6543"
    }
    ```
- **Response Body**:
    ```json
    {
      "id": "67890",
      "name": "Updated Supplier",
      "contact": "555-987-6543"
    }
    ```

#### 4. **Delete a supplier**
- **Method**: `DELETE`
- **Endpoint**: `/api/suppliers/:id`
- **Request Body**: None
- **Response Body**:
    ```json
    {
      "message": "Supplier deleted successfully."
    }
    ```

---

### CSV API

#### 1. **Export inventory data to CSV**
- **Method**: `GET`
- **Endpoint**: `/api/inventory/csv/export`
- **Description**: Exports the inventory data to a CSV file and triggers a download.
- **Request Body**: None
- **Response Body**: CSV file download (`inventory.csv`)

#### 2. **Import inventory data from CSV**
- **Method**: `POST`
- **Endpoint**: `/api/inventory/csv/import`
- **Request Body**: Form-data with a file (file) attached. The file should be a CSV containing inventory data.
    - Form-data: `{ file: <csv_file> }`
- **Response Body**:
    ```json
    {
      "message": "Inventory data imported successfully.",
      "count": 5
    }
    ```

---

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend.
- **Express**: Web framework for routing and handling HTTP requests.
- **MongoDB**: NoSQL database for storing inventory and supplier data.
- **Mongoose**: MongoDB object modeling for Node.js.
- **Multer**: Middleware for handling file uploads.
- **json2csv**: Library for converting JSON data to CSV format.
- **csv-parser**: Library for parsing CSV files.

---

## Run Locally

1. Start the MongoDB server locally or connect to a remote MongoDB cluster.
2. Run the application:

    ```bash
    npm start
    ```

    The server will run on the specified port (default: 5000).

---
