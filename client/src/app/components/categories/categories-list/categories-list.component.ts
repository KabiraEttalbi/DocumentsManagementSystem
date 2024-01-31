import { Component, OnInit } from '@angular/core';
import { CategoriesCrudService } from '../../../services/categories/categories-crud.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.css'
})
export class CategoriesListComponent implements OnInit{

  categories: any = [];

  constructor (private categoriesCrudService: CategoriesCrudService) {

  }

  ngOnInit(): void {
    this.categoriesCrudService.getCategories()
    .subscribe(res =>{
      console.log(res)
      this.categories = res;
    });
  }

  delete(id: any, index: any) {
    console.log(id);
    if (confirm("Voulez-vous vraiment supprimer cette categorie? ")) {
        this.categoriesCrudService.deleteCategory(id)
        .subscribe(() =>{
        this.categories.splice(index,1);
      });
    }
  }
}
