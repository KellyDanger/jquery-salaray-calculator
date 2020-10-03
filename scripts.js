
$(document).ready(onReady);

function onReady(){
  $(employeeInfoButton).on('click', buttonFunc);
}//end onReady

let employeeArray = [];

//All actions happening on button click
function buttonFunc(){
  listEmpInfo();//store and list the employees
  calcMonthlyCosts();//calculate the total monthly cost of salaries
  $('.input').val('');//clear inputs
}//end buttonFunc



//calculate the monthly salary of each employee fromt he employeeArray and add up the total monthly cost of salaries, called in buttonFunc
function calcMonthlyCosts(){
  let monthlySalary = 0;
  let monthlyCost = 0;
  for(let i = 0; i < employeeArray.length; i++){
    monthlySalary = Math.floor(employeeArray[i].salary / 12);
    monthlyCost += monthlySalary;
  }
  $('#monthlyTotal').empty();
  $('#monthlyTotal').append(`<td id="monthlyTotal">Monthly Total: $${monthlyCost} </td>`)
}//end calculateMonthlyCosts

//will append employee info to the DOM table
function appendEmp(){
  console.log('appending')
  for(let i = 0; i < employeeArray.length; i++){
    $('#employeeInfoTableBody').append(`<tr><td>cell1</td></tr>`)
  }//end for loop
}//end appendEmp


//creates an object to store user input as an object and push that object to the employeeArray
function listEmpInfo(){
  let newEmployee = {
    firstName: $('#employeeFirstInput').val(),
    lastName: $('#employeeLastInput').val(),
    idNumber: $('#idNumberInput').val(),
    title: $('#jobTitleInput').val(),
    salary: $('#salaryInput').val(),
  }//end object create
  employeeArray.push(newEmployee);
  $('#employeeInfoTableBody').append(`<tr>`);
  $('#employeeInfoTableBody').append(`<td>${newEmployee.firstName}</td>`);
  $('#employeeInfoTableBody').append(`<td>${newEmployee.lastName}</td>`);
  $('#employeeInfoTableBody').append(`<td>${newEmployee.idNumber}</td>`);
  $('#employeeInfoTableBody').append(`<td>${newEmployee.title}</td>`);
  $('#employeeInfoTableBody').append(`<td>$${newEmployee.salary}</td>`);
  $('#employeeInfoTableBody').append(`</tr>`)
}//end storeEmpInfo


