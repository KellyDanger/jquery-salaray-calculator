
$(document).ready(onReady);

function onReady(){
  $(employeeInfoButton).on('click', buttonFunc);
}//end onReady

let employeeArray = [];
let monthlyCost = 0;

function buttonFunc(){
  listEmpInfo();
  calcMonthlyCosts();
  $('.input').val('');
  console.log('I was clicked')
}//end buttonFunc

function calcMonthlyCosts(){
  console.log('whoah, that is expensive')
  for(let i = 0; i < employeeArray.length; i++){
    console.log(i)
  }
}//end calculateMonthlyCosts


function listEmpInfo(){//creates an object to store user input, working(tested via console log to confirm return of object)
  let newEmployee = {
    firstName: $('#employeeFirstInput').val(),
    lastName: $('#employeeLastInput').val(),
    idNumber: $('#idNumberInput').val(),
    title: $('#jobTitleInput').val(),
    salary: $('#salarayInput')
  }
  employeeArray.push(newEmployee);
}//end storeEmpInfo


