import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesCrudService } from '../../../services/categories/categories-crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent{

  addCategoryForm: FormGroup
  constructor(public formBuilder: FormBuilder, private router: Router,private ngZone: NgZone, private categoriesCrudService: CategoriesCrudService ) {
    this.addCategoryForm = this.formBuilder.group({
      name: ['']
    })
  }

  ngOnInit(): void {}
  onSubmit(): any {
    this.categoriesCrudService.addCategory(this.addCategoryForm.value)
      .subscribe({
        next: () => {
          console.log('data added successfully');
          this.ngZone.run(() => this.router.navigateByUrl('/categories'));
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          // Optional: Handle completion if needed
        }
      } as Observer<any>);
  }
}
