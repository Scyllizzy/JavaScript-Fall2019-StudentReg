var Student = (function () {
    function Student() {
    }
    return Student;
}());
window.onload = main;
function main() {
    var regBtn = document.querySelector("button");
    regBtn.onclick = processForm;
}
function processForm() {
    var stu = getStudentFromForm();
    displayStudent(stu);
    clearForm();
    console.log(stu);
}
function getStudentFromForm() {
    var newStudent = new Student();
    newStudent.firstName = inputValue("first-name");
    newStudent.lastName = inputValue("last-name");
    newStudent.address = inputValue("address");
    newStudent.program = inputValue("program");
    newStudent.dateOfBirth = new Date(inputValue("dob"));
    return newStudent;
}
function inputValue(ID) {
    return document.getElementById(ID).value;
}
function displayStudent(s) {
    var newItem = document.createElement("li");
    newItem.innerHTML = s.firstName + " " + s.lastName;
    var list = document.querySelector("#student-list > ul");
    list.appendChild(newItem);
}
function clearForm() {
}
