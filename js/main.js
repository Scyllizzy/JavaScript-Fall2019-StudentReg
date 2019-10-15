var programAttr = "data-program";
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
function displayStudent(stu) {
    var newItem = document.createElement("li");
    newItem.innerHTML = stu.firstName + " " + stu.lastName;
    var list = document.querySelector("#student-list > ul");
    newItem.setAttribute(programAttr, stu.program);
    newItem.setAttribute("data-address", stu.address);
    newItem.setAttribute("data-birthdate", stu.dateOfBirth.toString());
    console.log(newItem);
    newItem.onclick = showStudentData;
    list.appendChild(newItem);
}
function showStudentData() {
    var currentListItem = this;
    var name = currentListItem.innerText;
    var program = currentListItem.getAttribute(programAttr);
    document.querySelector("#display > h2").innerHTML = name;
    document.querySelector("#display > p").innerHTML = name + " is studying " + program;
}
function clearForm() {
    var allTextBoxes = document.querySelectorAll("input[type=text]");
    for (var currTxt = 0; currTxt < allTextBoxes.length; currTxt++) {
        var currBox = allTextBoxes[currTxt];
        currBox.value = "";
    }
}
