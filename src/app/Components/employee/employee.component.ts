import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: { id: number, firstName: string, middleName?: string, lastName: string, position: string, salary: number, department: string }[] = [];
  newEmployeeFirstName: string = '';
  newEmployeeMiddleName: string = '';
  newEmployeeLastName: string = '';
  newEmployeePosition: string = '';
  newEmployeeSalary: number | null = null;
  newEmployeeDepartment: string = '';
  editingIndex: number | null = null;
  nextId: number = 1;

  ngOnInit() {
    this.loadEmployees();
  }

  addOrUpdateEmployee() {
    if (this.newEmployeeFirstName.trim() && this.newEmployeeLastName.trim() && this.newEmployeePosition.trim() && this.newEmployeeSalary !== null && this.newEmployeeDepartment.trim()) {
      if (this.editingIndex !== null) {
        this.employees[this.editingIndex] = {
          ...this.employees[this.editingIndex],
          firstName: this.newEmployeeFirstName,
          middleName: this.newEmployeeMiddleName,
          lastName: this.newEmployeeLastName,
          position: this.newEmployeePosition,
          salary: this.newEmployeeSalary,
          department: this.newEmployeeDepartment
        };
        this.editingIndex = null;
      } else {
        this.employees.push({
          id: this.nextId++,
          firstName: this.newEmployeeFirstName,
          middleName: this.newEmployeeMiddleName,
          lastName: this.newEmployeeLastName,
          position: this.newEmployeePosition,
          salary: this.newEmployeeSalary,
          department: this.newEmployeeDepartment
        });
      }
      this.saveEmployees();
      this.resetForm();
    }
  }

  editEmployee(index: number) {
    this.newEmployeeFirstName = this.employees[index].firstName;
    this.newEmployeeMiddleName = this.employees[index].middleName || '';
    this.newEmployeeLastName = this.employees[index].lastName;
    this.newEmployeePosition = this.employees[index].position;
    this.newEmployeeSalary = this.employees[index].salary;
    this.newEmployeeDepartment = this.employees[index].department;
    this.editingIndex = index;
  }

  deleteEmployee(index: number) {
    this.employees.splice(index, 1);
    this.saveEmployees();
    if (this.editingIndex === index) {
      this.resetForm();
      this.editingIndex = null;
    }
  }

  resetForm() {
    this.newEmployeeFirstName = '';
    this.newEmployeeMiddleName = '';
    this.newEmployeeLastName = '';
    this.newEmployeePosition = '';
    this.newEmployeeSalary = null;
    this.newEmployeeDepartment = '';
  }

  saveEmployees() {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('employees', JSON.stringify(this.employees));
    }
  }

  loadEmployees() {
    if (typeof localStorage !== 'undefined') {
      const savedEmployees = localStorage.getItem('employees');
      if (savedEmployees) {
        this.employees = JSON.parse(savedEmployees);
        if (this.employees.length > 0) {
          this.nextId = Math.max(...this.employees.map(e => e.id)) + 1;
        }
      }
    }
  }

  clearLocalStorage() {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('employees');
      this.employees = [];
      this.nextId = 1;
      this.resetForm();
    }
  }
}
