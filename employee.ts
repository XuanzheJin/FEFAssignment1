/*
    Name:   Xuanzhe Jin
    Title:  Front End Frameworks Assignment 1
    Date:   2026/09/25
*/
export class Employee {
    public ssn: string = "";
    public lastName: string = "";
    public firstName: string = "";
    public address: string = "";
    public rank: number = 0;
    public age: number = 0;

    constructor(
        ssn: string,
        lastName: string,
        firstName: string,
        address: string,
        rank: number,
        age: number,
    ) {
        this.ssn = ssn;
        this.lastName = lastName;
        this.firstName = firstName;
        this.address = address;
        this.rank = rank;
        this.age = age;
    }

    protected validateAge(): boolean {
        let ageValid = this.age >= 16;
        if (!ageValid) {
            console.log(
                "The age of the employee must be greater than or equal to 16",
            );
        }
        return ageValid;
    }

    protected validateRank(): boolean {
        let rankValid = this.rank >= 1 && this.rank <= 5;
        if (!rankValid) {
            console.log("The rank must be between 1 and five inclusive");
        }
        return rankValid;
    }

    protected validateSSN(): boolean {
        const pattern = /^\d{3}-\d{3}-\d{3}$/;
        const ssnValid = pattern.test(this.ssn);
        if (!ssnValid) {
            console.log("The SSN must match the pattern: ###-###-###");
        }
        return ssnValid;
    }
}
