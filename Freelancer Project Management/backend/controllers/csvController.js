const Project = require('../models/projectModel');
const { Parser } = require('json2csv');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

// Export Projects to CSV
exports.exportProjects = async (req, res) => {
  try {
    const projects = await Project.find().lean(); // .lean() to get plain JavaScript objects
    const fields = ['_id', 'name', 'dueDate', 'amount', 'status'];
    const parser = new Parser({ fields });
    const csv = parser.parse(projects);

    const filePath = path.join(__dirname, '../exports/projects.csv');
    fs.writeFileSync(filePath, csv);

    res.download(filePath, 'projects.csv', () => fs.unlinkSync(filePath));
  } catch (error) {
    res.status(500).json({ message: 'Error exporting projects', error });
  }
};

// Import Projects from CSV
exports.importProjects = async (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

  try {
    const projects = [];
    const filePath = req.file.path;

    // Read and parse the CSV file
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        const { name, dueDate, amount, status } = row;
        if (name && dueDate && amount && status) { // Ensure the row has all necessary fields
          projects.push({ name, dueDate, amount, status });
        }
      })
      .on('end', async () => {
        if (projects.length === 0) {
          return res.status(400).json({ message: 'No valid data found in the file' });
        }

        try {
          await Project.insertMany(projects); // Insert projects into the DB
          fs.unlinkSync(filePath); // Clean up the file after processing
          res.status(200).json({ message: 'Projects imported successfully' });
        } catch (error) {
          fs.unlinkSync(filePath); // Clean up the file if there's an error during insert
          res.status(500).json({ message: 'Error importing projects into the database', error });
        }
      })
      .on('error', (error) => {
        fs.unlinkSync(filePath); // Clean up the file if there's an error during reading
        res.status(500).json({ message: 'Error reading the CSV file', error });
      });
  } catch (error) {
    res.status(500).json({ message: 'Error importing projects', error });
  }
};
