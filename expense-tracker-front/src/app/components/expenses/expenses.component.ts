import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../models/expense.model';
import { FormsModule } from '@angular/forms';  // Assurez-vous d'importer FormsModule
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
  imports: [NgFor, FormsModule,HttpClientModule,], // Ajoutez FormsModule ici

})
export class ExpensesComponent implements OnInit {
  expenses: Expense[] = [];
  newExpense: Expense = { id: 0, name: '', amount: 0, category: '', date: new Date() };
  categories: string[] = ['Food', 'Transport', 'Entertainment', 'Others'];

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.loadExpenses();
  }

  loadExpenses(): void {
    this.expenseService.getExpenses().subscribe((data) => {
      this.expenses = data;
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
