import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../models/expense.model';
import { FormsModule } from '@angular/forms';  // Assurez-vous d'importer FormsModule
import { CommonModule, NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
  imports: [CommonModule,NgFor, FormsModule,HttpClientModule,], // Ajoutez FormsModule ici

})
export class ExpensesComponent implements OnInit {
  expenses: Expense[] = [];
  newExpense: Expense = { id: 0, name: '', amount: 0, category: '', date: new Date() };
  categories: Category[] = [];

  constructor(private expenseService: ExpenseService, private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadExpenses();
    this.loadCategorys();
  }

  loadExpenses(): void {
    this.expenseService.getExpenses().subscribe((data) => {
      this.expenses = data;
    });
  }
  loadCategorys(): void {
    this.categoryService.getCategorys().subscribe((data) => {
      this.categories = data;
    });
  }

  addExpense(): void {
    if (!this.newExpense.name || !this.newExpense.amount || !this.newExpense.category) return;

    this.expenseService.addExpense(this.newExpense).subscribe((expense) => {
      this.expenses.push(expense);
      this.newExpense = { id: 0, name: '', amount: 0, category: '', date: new Date() };
    });
  }

  deleteExpense(id: number): void {
    this.expenseService.deleteExpense(id).subscribe(() => {
      this.expenses = this.expenses.filter((expense) => expense.id !== id);
    });
  }
}
