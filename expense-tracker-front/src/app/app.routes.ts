import { Routes } from '@angular/router';
import { CategorysComponent } from './components/categorys/categorys.component';
import { ExpensesComponent } from './components/expenses/expenses.component';

export const routes: Routes = [{ path: 'expenses', component: ExpensesComponent },
    { path: 'categorys', component: CategorysComponent },
    { path: '', redirectTo: '', pathMatch: 'full' },];
