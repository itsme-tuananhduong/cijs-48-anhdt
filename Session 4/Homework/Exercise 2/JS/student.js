import {Person} from "./person.js";

class Student extends Person {
    studentID;
    schoolYear;
    score;
    constructor(name, gender, studentID, schoolYear, score) {
        super(name, gender);
        this.studentID = studentID;
        this.schoolYear = schoolYear;
        this.score = score;
    }
}

export {Student};