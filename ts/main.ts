/**
 * Represents a college student
 */
class Student {
    firstName:string;
    lastName:string;
    dateOfBirth:Date;
    /**
     * The full address of the student:
     * Street, City, State, Zip
     */
    address:string;
    /**
     * The program of study
     */
    program:string;

    /*
    constructor(fName, lName){
        this.firstName = fName;
        this.lastName = lName;
    }
    */
}

window.onload = main;

function main() {
    let regBtn = document.querySelector("button");
    regBtn.onclick = processForm;
}

/**
 * Gets information from the student, displays it, then clears the form all once the register button is clicked.
 */
function processForm() {
    //get student off form
    let stu:Student = getStudentFromForm();
    //display student
    displayStudent(stu);
    //clear form
    clearForm();
}

/**
 * Grabs all the information from the form and puts it into Student Object.
 */
function getStudentFromForm():Student {
    let newStudent = new Student();
    newStudent.firstName = inputValue("first-name");
    newStudent.lastName = inputValue("last-name");
    newStudent.address = inputValue("address");
    newStudent.program = inputValue("program");
    newStudent.dateOfBirth = new Date(inputValue("dob"));

    return newStudent;
}

/**
 * Gets the value from the HTMLInputElement.
 * @param ID The ID from the HTML file.
 */
function inputValue(ID:string):string {
    return (<HTMLInputElement>document.getElementById(ID)).value;
}

function displayStudent(student):void {

}

function clearForm():void {

}

