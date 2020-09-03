import {Class} from "./class.js";
import {Lecturer} from "./lecturer.js";
import {Student} from "./student.js";

// Ho ten: Duong Tuan Anh
// Lop: CIJS-48

let c1 = new Class('102', 'math');

let l1 = new Lecturer('chris', 'male', 'professor');

let s1 = new Student('alex', 'male', '01', '2020 - 2021', 5.0),
    s2 = new Student('alex', 'male', '02', '2020 - 2021', 8.5),
    s3 = new Student('anna', 'female', '03', '2020 - 2021', 9.5);

c1.addLecturer(l1);
c1.addStudents(s1);
c1.addStudents(s2);
c1.addStudents(s3);

console.log(c1);

let name = 'alex';
console.log(`Danh sach sinh vien co ten ${name}:`);
console.log(c1.findStudent(name));

let score = 6.0;
console.log(`Danh sach sinh vien dat diem tren ${score}:`);
console.log(c1.studentScoreFilter(6.0));