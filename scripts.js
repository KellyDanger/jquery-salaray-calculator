
$(document).ready(onReady);

function onReady(){
  $(employeeInfoButton).on('click', buttonFunc);
}//end onReady

let employeeArray = [];


function buttonFunc(){
  listEmpInfo();
  console.log(calcMonthlyCosts());
  $('.input').val('');
  console.log('I was clicked')
}//end buttonFunc

function calcMonthlyCosts(){
  console.log('whoah, that is expensive')
  let monthlySalary = 0;
  let monthlyCost = 0;
  for(let i = 0; i < employeeArray.length; i++){
    monthlySalary = Math.floor(employeeArray[i].salary / 12);
    console.log(employeeArray[i].firstName, monthlySalary);
    monthlyCost += monthlySalary;
  }
  return monthlyCost;
}//end calculateMonthlyCosts


function listEmpInfo(){//creates an object to store user input, working(tested via console log to confirm return of object)
  let newEmployee = {
    firstName: $('#employeeFirstInput').val(),
    lastName: $('#employeeLastInput').val(),
    idNumber: $('#idNumberInput').val(),
    title: $('#jobTitleInput').val(),
    salary: $('#salaryInput').val(),
  }
  employeeArray.push(newEmployee);
}//end storeEmpInfo


