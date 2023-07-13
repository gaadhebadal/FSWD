const fs = require('fs');

const fileContents = fs.readFileSync('student-data.txt', 'utf-8');
const students = fileContents.split('\n');

const filteredStudents = students.filter((student) => {
  const [name, cgpa] = student.split(',');
  return name.includes('MA') && parseFloat(cgpa) > 7;
});

console.log(filteredStudents);
