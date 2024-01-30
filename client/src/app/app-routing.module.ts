import { DocumentsComponent } from './components/documents/documents.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { ArchiveComponent } from './components/archive/archive.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UsersComponent } from './components/users/users.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FormsComponent } from './components/forms/forms.component';


const routes: Routes = [
  { path: 'forms', title: 'Connexion', component: LoginFormComponent },
  { path: 'documents', title: 'Documents', component: DocumentsListComponent },
  { path: 'users', title: 'Utilisateurs', component: UsersListComponent },
  { path: 'categories', title: 'Categories', component: CategoriesListComponent },
  { path: 'documents', title: 'Documents', component: DocumentsComponent, children:[
    { path: 'documents-list', title: 'Documents', component: DocumentsListComponent},
    { path: 'add-document', title: 'Ajouter un document', component: AddDocumentComponent},
    { path: 'edit-document', title: 'Modifier le document', component: EditDocumentComponent},
  ]},
  { path: 'categories', title: 'Categories', component: CategoriesComponent, children:[
    { path: 'categories-list', title: 'Categories', component: CategoriesListComponent },
    { path: 'add-category', title: 'Ajouter une catgorie', component: AddCategoryComponent },
    { path: 'edit-category', title: 'modifier la categorie', component: EditCategoryComponent},
  ]},
  { path: 'users', title: 'Utilisateurs', component: UsersComponent, children:[
    { path: 'users', title: 'Utilisateurs', component: UsersListComponent },
    { path: 'add-user', title: 'Ajouter un utilisateur', component: AddUserComponent},
    { path: 'edit-user', title: "Modifier l'utilisateur", component: EditUserComponent },
  ]},
  { path: 'forms', title: 'Connexion', component: FormsComponent, children:[
    { path: 'login', title: 'Connexion', component: LoginFormComponent },
    { path: 'signup', title: 'Créer un compte', component: SignupFormComponent },
  ]},
  { path: 'archive', title: 'Archive', component: ArchiveComponent },
  { path: '', redirectTo: '/documents', title: 'Documents', pathMatch: 'full' },
  { path: '**', title: 'Page Not Found', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
