const fs = require('fs');
const csv = require('csv-parser');

let fieldRecords = {};
let counter = 0;

function readCSV(path) {
  return new Promise((resolve, reject) => {
    const fileStream = fs.createReadStream(path);

    fileStream
      .on('error', (error) => {
        console.log('Cannot load the database');
        reject(error); // Reject the promise on error
      });

    fileStream
      .pipe(csv())
      .on('data', (row) => {
        if (Object.prototype.hasOwnProperty.call(fieldRecords, row.field)) {
          fieldRecords[row.field].push(row.firstname);
        } else {
          fieldRecords[row.field] = [row.firstname];
        }
        counter += 1;
      })
      .on('end', () => {
        resolve(); // Resolve the promise when the stream ends
      });
  });
}

module.exports = async function countStudents(path) {
  // Reset records and counter to handle multiple invocations
  fieldRecords = {};
  counter = 0;

  try {
    await readCSV(path);
    console.log(`Number of students: ${counter}`);

    for (const key in fieldRecords) {
      if (Object.prototype.hasOwnProperty.call(fieldRecords, key)) {
        const value = fieldRecords[key];
        console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
      }
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};
