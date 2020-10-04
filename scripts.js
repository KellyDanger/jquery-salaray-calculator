
$(document).ready(onReady);

function onReady(){
  $('#employeeInfoButton').on('click', addFunc);
  $('#employeeInfoTableBody').on('click', '#deleteEmpButton', deleteFunc);
}//end onReady
 
let employeeArray = [];

//All actions happening on button click
function addFunc(){
  listEmpInfo();//store and list the employees
  calcMonthlyCosts();//calculate the total monthly cost of salaries
  $('.input').val('');//clear inputs
}//end addFunc


//calculate the monthly salary of each employee fromt he employeeArray and add up the total monthly cost of salaries, called in addFunc
function calcMonthlyCosts(){
  let monthlySalary = 0;
  let monthlyCost = 0;
  for(let i = 0; i < employeeArray.length; i++){
    monthlySalary = Math.floor(employeeArray[i].salary / 12);
    monthlyCost += monthlySalary;
  }//end for loop
  //if the monthly total is more than 20000, then the table cell will turn red
  if(monthlyCost > 20000){
    $('#monthlyTotal').addClass('redCell');
  }//end if statement
  $('#monthlyTotalNum').empty();
  $('#monthlyTotalNum').text(`${monthlyCost}`)
}//end calculateMonthlyCosts

function deleteFunc(){
  $(this).parent().parent().remove();
  
}//end deleteFunc


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
  $('#employeeInfoTableBody').append(`
    <tr>
      <td>${newEmployee.firstName}</td>
      <td>${newEmployee.lastName}</td>
      <td id="idData">${newEmployee.idNumber}</td>
      <td>${newEmployee.title}</td>
      <td id="salaryData">$${newEmployee.salary}</td>
      <td><button id="deleteEmpButton">Remove Employee</button></td>
    </tr>`
  );
}//end storeEmpInfo


