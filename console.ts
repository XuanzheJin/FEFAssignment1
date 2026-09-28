/*
    Name:   Xuanzhe Jin
    Title:  Front End Frameworks Assignment 1
    Date:   2026/09/25
*/

import { ContractEmployee } from "./contractemployee.ts";
import { FullTimeEmployee } from "./fulltimeemployee.ts";

let fulltimeEmployee: FullTimeEmployee = new FullTimeEmployee(
    "123-456-789",
    "Jin",
    "Xuanzhe",
    "1234 MountainRd",
    3,
    18,
    8000,
    10000,
    16,
);
fulltimeEmployee.saveEmployee();

let contractEmployee: ContractEmployee = new ContractEmployee(
    "223-567-321",
    "lin",
    "Chong",
    "1234 MainRd",
    2,
    22,
    46,
    30,
);
contractEmployee.saveEmployee();

let invalidEmployee:FullTimeEmployee = new FullTimeEmployee(
    "234-56-8923",
    "Chen",
    "Ming",
    "1234 MountainRd",
    9,
    18,
    8000,
    10000,
    16,
)
invalidEmployee.saveEmployee();