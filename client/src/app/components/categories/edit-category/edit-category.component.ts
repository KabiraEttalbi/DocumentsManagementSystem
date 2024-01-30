import { Component, NgZone, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../../../services/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.css'
})
export class EditCategoryComponent{
  // getId: any;
  // updateCategoryForm: FormGroup;

  // constructor(public formBuilder: FormBuilder, private router: Router,private ngZone: NgZone, private crudService: CrudService, private activatedRoute: ActivatedRoute ) {
  //   this.getId(this.activatedRoute.snapshot.paramMap.get('id'));
  //   this.crudService.getCategory(this.getId).subscribe((res) =>{
  //       console.log(res)
  //       this.updateCategoryForm.setValue({
  //         name: ['']
  //     });
  //   });
  //   this.updateCategoryForm = this.formBuilder.group({
  //     name: ['']
  //   })
  // }

  // ngOnInit(): void {}
  // onUpdate(): any {
  //   this.crudService.updateCategory(this.getId, this.updateCategoryForm.value)
  //     .subscribe({
  //       next: () => {
  //         console.log('data updated successfully');
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

