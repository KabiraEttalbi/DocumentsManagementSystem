import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { SignupFormComponent } from './components/forms/signup-form/signup-form.component';
import { DocumentsListComponent } from './components/documents/documents-list/documents-list.component';
import { AddDocumentComponent } from './components/documents/add-document/add-document.component';
import { EditDocumentComponent } from './components/documents/edit-document/edit-document.component';
import { CategoriesListComponent } from './components/categories/categories-list/categories-list.component';
import { AddCategoryComponent } from './components/categories/add-category/add-category.component';
import { EditCategoryComponent } from './components/categories/edit-category/edit-category.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { UsersComponent } from './components/users/users.component';
import { FormsComponent } from './components/forms/forms.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    LoginFormComponent,
    SignupFormComponent,
    DocumentsListComponent,
    AddDocumentComponent,
    EditDocumentComponent,
    CategoriesListComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    UsersListComponent,
    AddUserComponent,
    EditUserComponent,
    SidebarComponent,
    ArchiveComponent,
    PageNotFoundComponent,
    DocumentsComponent,
    CategoriesComponent,
    UsersComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
