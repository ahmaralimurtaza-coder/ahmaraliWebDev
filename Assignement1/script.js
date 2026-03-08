function generateCV(){

document.getElementById("cvName").innerText =
document.getElementById("name").value;

document.getElementById("cvEmail").innerText =
document.getElementById("email").value;

document.getElementById("cvPhone").innerText =
document.getElementById("phone").value;

document.getElementById("cvAddress").innerText =
document.getElementById("address").value;

let degree = document.getElementById("degree").value;
let uni = document.getElementById("university").value;
let year = document.getElementById("year").value;

document.getElementById("cvEducation").innerText =
degree + " - " + uni + " (" + year + ")";

document.getElementById("cvSkills").innerText =
document.getElementById("skills").value;

}

function printCV(){
window.print();
}