import {Person} from "./person.js";

class Lecturer extends Person {
    academicLevel;
    constructor(name, gender, academicLevel) {
        super(name, gender);
        this.academicLevel = academicLevel;
    }
}

export {Lecturer};