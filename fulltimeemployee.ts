/*
    Name:   Xuanzhe Jin
    Title:  Front End Frameworks Assignment 1
    Date:   2026/09/25
*/

import { Employee } from "./employee.ts";
import type { IEmployee } from "./iemployee.ts";

export class FullTimeEmployee extends Employee implements IEmployee {
    public salary: number = 0;
    public bonus: number = 0;
    public overtimeHours: number = 0;

    constructor(
        ssn: string,
        lastName: string,
        firstName: string,
        address: string,
        rank: number,
        age: number,
        salary: number,
        bonus: number,
        overtimeHours: number,
    ) {
        super(ssn, lastName, firstName, address, rank, age);
        this.salary = salary;
        this.bonus = bonus;
        this.overtimeHours = overtimeHours;
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
        const hourlyRate = this.salary / 40;
        let overtimePay = 0;
        if (this.overtimeHours >= 1) {
            overtimePay = 1.25 * hourlyRate;
        } else if (this.overtimeHours >= 11) {
            overtimePay = 1.5 * hourlyRate;
        } else if (this.overtimeHours >= 21) {
            overtimePay = 1.75 * hourlyRate;
        } else if (this.overtimeHours > 30) {
            overtimePay = 2 * hourlyRate;
        }

        return this.salary + this.bonus + overtimePay;
    }
    saveEmployee(): void {
        if (this.validateAge() && this.validateRank() && this.validateSSN()) {
            this.displayinformation();
        } else {
            console.log(
                `There are validation errors, so the employee cannot be saved!`,
            );
        }
    }
}
