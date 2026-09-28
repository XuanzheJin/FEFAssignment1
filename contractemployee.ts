/*
    Name:   Xuanzhe Jin
    Title:  Front End Frameworks Assignment 1
    Date:   2026/09/25
*/

import { Employee } from "./employee.ts";
import type { IEmployee } from "./iemployee.ts";

export class ContractEmployee extends Employee implements IEmployee {
    hours: number = 0;
    hourlyRate: number = 0;

    constructor(
        ssn: string,
        lastName: string,
        firstName: string,
        address: string,
        rank: number,
        age: number,
        hours: number,
        hourlyRate: number,
    ) {
        super(ssn, lastName, firstName, address, rank, age);
        this.hours = hours;
        this.hourlyRate = hourlyRate;
    }

    displayinformation(): string {
        let printInformation = `
            Employee Name: ${this.firstName} ${this.lastName}
            Address: ${this.address}
            Rank: ${this.rank}
            Age: ${this.age}
            SSN: ${this.ssn}
            Total Compensation: ${this.calculateCompensation()}
        `;
        console.log(printInformation);
        return printInformation;
    }
    calculateCompensation(): number {
        if (this.hours > 40) {
            return (
                this.hourlyRate * 40 + (this.hours - 40) * this.hourlyRate * 1.5
            );
        } else {
            return this.hours * this.hourlyRate;
        }
    }
    saveEmployee():void {      
        if (this.validateAge() && this.validateRank() && this.validateSSN()) {
            this.displayinformation();
        } else {
            console.log(
                `There are validation errors, so the employee cannot be saved!`,
            );
        }
    }
}
