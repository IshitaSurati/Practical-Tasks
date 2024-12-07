const Project = require('../models/projectModel');
const { Parser } = require('json2csv');
const fs = require('fs');
const path = require('path');

// Export Projects to CSV
exports.exportProjects = async (req, res) => {
  try {
    const projects = await Project.find();
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
    const csvData = fs.readFileSync(req.file.path, 'utf8');
    const rows = csvData.split('\n').slice(1);

    const projects = rows.map((row) => {
      const [name, dueDate, amount, status] = row.split(',');
      return { name, dueDate, amount, status };
    });

    await Project.insertMany(projects);
    fs.unlinkSync(req.file.path);
    res.status(200).json({ message: 'Projects imported successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error importing projects', error });
  }
};
