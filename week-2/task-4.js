const fs = require('fs');

// Read the file
fs.readFile('student-data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  // Process the file content
  const students = data.split('\n');
  const filteredStudents = students.filter((student) => {
    const [name, cgpa] = student.split(',');
    // Check if name contains 'MA' and CGPA > 7
    return name.includes('Ba') && parseFloat(cgpa) > 7;
  });
  // Print the filtered students
  console.log('Filtered Students:');
  filteredStudents.forEach((student) => console.log(student));
});
