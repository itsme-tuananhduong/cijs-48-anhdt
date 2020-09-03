import {Lecturer} from "./lecturer.js";
import {Student} from "./student.js";

class Class {
    classID;
    subjectName;
    lecturer = {};
    students = [];
    constructor(classID, subjectName) {
        this.classID = classID;
        this.subjectName = subjectName;
    }
    addLecturer(newLecturer) {
        if (newLecturer instanceof Lecturer) {
            this.lecturer = newLecturer;
        }
    }
    addStudents(newStudent) {
        if (newStudent instanceof Student) {
            this.students.push(newStudent);
        }
    }
    findStudent(name) {
        let student = [];
        for (let x of this.students) {
            if (x.name == name) {
                student.push(x);
            }
        }
        return student;
    }
    studentScoreFilter(score) {
        let student = [];
        for (let x of this.students) {
            if (x.score > score) {
                student.push(x);
            }
        }
        return student;
    }
}

export {Class};