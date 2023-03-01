// Your code here
const Employee = require('./employee')

const employee = new Employee('Jhon Wick', 'Dog Lover')

employee.sayName()

const sayEmployee = employee.sayName.bind(employee)
setTimeout(sayEmployee, 2000)

const sayEmployeeOccupation = employee.sayOccupation.bind(employee)
setTimeout(sayEmployeeOccupation, 3000)