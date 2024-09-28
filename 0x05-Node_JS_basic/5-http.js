const http = require('http');
const { argv } = require('process');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/' && req.method === 'GET') {
    res.write('Hello Holberton School!');
  } else if (req.url === '/students' && req.method === 'GET') {
    res.write('This is the list of our students');
    try {
      const studentList = await countStudents(argv[2]); // Await the result from countStudents
      res.end(studentList); // Write the result to the response
    } catch (error) {
      res.statusCode = 500; // Internal Server Error
      res.write(`Error: ${error.message}\n`);
    } // Write the result to the response
  }
  res.end();
});

app.listen(1245);

module.exports = app;
