import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ExpensesComponent } from "./components/expenses/expenses.component";
import { CategorysComponent } from "./components/categorys/categorys.component";

@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterOutlet, ExpensesComponent,CategorysComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'expense-tracker-front';
}
