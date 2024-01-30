import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../../services/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent{

  // categoryForm: FormGroup
  // constructor(public formBuilder: FormBuilder, private router: Router,private ngZone: NgZone, private crudService: CrudService ) {
  //   this.categoryForm = this.formBuilder.group({
  //     name: ['']
  //   })
  // }

  // ngOnInit(): void {}
  // onSubmit(): any {
  //   this.crudService.addCategory(this.categoryForm.value)
  //     .subscribe({
  //       next: () => {
  //         console.log('data added successfully');
  //         this.ngZone.run(() => this.router.navigateByUrl('/categories'));
  //       },
  //       error: (err) => {
  //         console.log(err);
  //       },
  //       complete: () => {
  //         // Optional: Handle completion if needed
  //       }
  //     } as Observer<any>);
  // }
}
