import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../services/crud.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.css'
})
export class CategoriesListComponent{

  // categories: any = [];

  // constructor (private crudService: CrudService) {

  // }

  // ngOnInit(): void {
  //   this.crudService.getCategories()
  //   .subscribe(res =>{
  //     console.log(res)
  //     this.categories = res;
  //   });
  // }

  // delele(id: any, index: any) {
  //   console.log(id);
  //   this.crudService.deleteCategory(id)
  //   .subscribe(() =>{
  //     this.categories.splice(index,1);
  //   });
  // }
}
