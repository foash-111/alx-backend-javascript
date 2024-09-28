const fs = require('fs');
const csvReader = require('csv-parser');

const fieldRecords = {};
let counter = 0;

module.exports = function myFunction(path) {
  const fileStream = fs.createReadStream(path);

  fileStream.on('error', () => {
    console.log('Cannot load the database');
  });

  fileStream
    .pipe(csvReader())
    .on('data', (row) => {
      if (Object.prototype.hasOwnProperty.call(fieldRecords, row.field)) {
        // Push row.firstname to existing array
        fieldRecords[row.field].push(row.firstname);
      } else {
        // Create a new array with row.firstname
        fieldRecords[row.field] = [row.firstname];
      }
      counter += 1;
    })
    .on('end', () => {
      console.log(`Number of students: ${counter}`);
      for (const key in fieldRecords) {
        if (Object.prototype.hasOwnProperty.call(fieldRecords, key)) {
          const value = fieldRecords[key]; // Retrieve the array
          console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
        }
      }
    });
};
