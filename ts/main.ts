//Constants
const programAttr = "data-program";

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

    console.log(stu);
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

function displayStudent(stu:Student):void {
    let newItem = document.createElement("li");

    newItem.innerHTML = stu.firstName + " " + stu.lastName;

    let list = document.querySelector("#student-list > ul");

    //imbed student data in <li>
    newItem.setAttribute(programAttr, stu.program);
    newItem.setAttribute("data-address", stu.address);
    newItem.setAttribute("data-birthdate", stu.dateOfBirth.toString());

    console.log(newItem);

    newItem.onclick = showStudentData;

    //Add <li> as a child to <ul>
    list.appendChild(newItem);
}

/**
 * shows indiviadul student data when a student <li> is clicked
 */
function showStudentData():void {
    let currentListItem = <HTMLLIElement>this;
    let name = currentListItem.innerText;
    let program = currentListItem.getAttribute(programAttr);
    
    document.querySelector("#display > h2").innerHTML = name;
    document.querySelector("#display > p").innerHTML = name + " is studying " + program;
}

function clearForm():void {

}

