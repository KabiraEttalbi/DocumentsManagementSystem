import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { EditCategoryComponent } from './components/categories/edit-category/edit-category.component';
import { AddCategoryComponent } from './components/categories/add-category/add-category.component';
import { CategoriesListComponent } from './components/categories/categories-list/categories-list.component';
import { EditDocumentComponent } from './components/documents/edit-document/edit-document.component';
import { AddDocumentComponent } from './components/documents/add-document/add-document.component';
import { DocumentsListComponent } from './components/documents/documents-list/documents-list.component';
import { SignupFormComponent } from './components/forms/signup-form/signup-form.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProfileComponent,
    EditUserComponent,
    AddUserComponent,
    UsersListComponent,
    EditCategoryComponent,
    AddCategoryComponent,
    CategoriesListComponent,
    EditDocumentComponent,
    AddDocumentComponent,
    DocumentsListComponent,
    SignupFormComponent,
    LoginFormComponent,
    SpinnerComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
