const { parse } = require("json2csv");
const fs = require("fs");
const csvParser = require("csv-parser");

exports.exportCSV = (data, filePath) => {
  const csv = parse(data);
  fs.writeFileSync(filePath, csv);
};

exports.importCSV = (filePath, callback) => {
  const results = [];
  fs.createReadStream(filePath)
    .pipe(csvParser())
    .on("data", (data) => results.push(data))
    .on("end", () => callback(results));
};
