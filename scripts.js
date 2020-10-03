
$(document).ready(onReady);

function onReady(){
  $(employeeInfoButton).on('click', buttonFunc);
}//end onReady

function buttonFunc(){
  listEmpInfo();
  calcMonthlyCosts();
  $('.input').val('');
  console.log('I was clicked')
}//end buttonFunc

function calcMonthlyCosts(){
  console.log('whoah, that is expensive')
}//end calculateMonthlyCosts


function listEmpInfo(){
  let newEmployee = {
    firstName: $('#employeeFirstInput').val(),
    lastName: $('#employeeLastInput').val(),
    idNumber: $('#idNumberInput').val(),
    title: $('#jobTitleInput').val(),
    salary: $('#salarayInput')
  }
  console.log(newEmployee);
}//end storeEmpInfo


