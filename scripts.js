
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



//creates an object to store user input as an object and push that object to the employeeArray
function listEmpInfo(){
  let newEmployee = {
    firstName: $('#employeeFirstInput').val(),
    lastName: $('#employeeLastInput').val(),
    idNumber: $('#idNumberInput').val(),
    title: $('#jobTitleInput').val(),
    salary: $('#salaryInput').val(),
  }
  employeeArray.push(newEmployee);
  
}//end storeEmpInfo


