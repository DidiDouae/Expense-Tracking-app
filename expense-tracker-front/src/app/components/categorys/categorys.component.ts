import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';
import { FormsModule } from '@angular/forms';  
@Component({
  selector: 'app-categorys',
  imports: [CommonModule,FormsModule,NgFor],
  templateUrl: './categorys.component.html',
  styleUrl: './categorys.component.css'
})
export class CategorysComponent {
  categorys: Category[] = [];
  newCategory: Category = {
    name: '',
    id: 0
  };
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadCategorys();
  }
  loadCategorys(): void {
    this.categoryService.getCategorys().subscribe((data) => {
      this.categorys = data;
    });
  }

  addCategory(): void {
    if (!this.newCategory.name ) return;

    this.categoryService.addCategory(this.newCategory).subscribe((Category) => {
      this.categorys.push(Category);
      this.newCategory = { id: 0, name: '' };
    });
  }



  deleteCategory(Id: number): void {
    this.categoryService.deleteCategory(Id).subscribe(() => {
      this.categorys = this.categorys.filter((category) => category.id !== Id);
    });
  }

}
