/**
 * The Department class is Abstract class which showing department details
 *
 *@class Department:Abstract
 *@constructor
 **/


abstract class Department{

    constructor( public name: string){}

    printName(): void{
        console.log(`Department Name ${this.name}`);
    }

    abstract printMeeting() :void;
}

/**
 * The AccountingDepartment class is drived class which showing department details
 *
 *@class AccountingDepartment
 *@extends Department
 *@constructor
 **/

class AccountingDepartment extends Department{

    constructor(){
        super(`Accounting and Auditing`) // constructors in derived classes must call super()
    }

    printMeeting(){
        console.log(`The Accounting Department meets each Monday at 10am.`);
    }

}

let department: Department;

department = new AccountingDepartment();

department.printName();

department.printMeeting();

