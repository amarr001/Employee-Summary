class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        this.name = data.name;
    }
    getId(){}
    getEmail(){}
    getRole(){
        return 'Employee'
    }
}
module.exports = Employee;
