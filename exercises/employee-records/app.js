var employees = [];

function Employee(name, jobTitle, salary, status) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status === undefined ? "Full Time" : status
}

Employee.prototype.printEmployeeForm = function() {
    console.log("\nName: " + this.name +"\nJob Title: " + this.jobTitle + "\nSalary: " + this.salary + "\nStatus: " + this.status)
}

var bob = new Employee("Bob", "Violist", 34000)
var jerry = new Employee("Jerry", "Human Resources", 60000)
var brad = new Employee("Brad", "Slacker", 15000, "Part Time")

bob.printEmployeeForm();
jerry.printEmployeeForm();
brad.printEmployeeForm();