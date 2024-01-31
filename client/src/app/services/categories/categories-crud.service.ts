import { Injectable } from '@angular/core';
import { Category } from "../../data/Category";
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesCrudService {

  RestAPI: string = 'http://127.0.0.1:8000/api/v1/categories';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  addCategory(data: Category): Observable<any> {
    return this.httpClient.post(this.RestAPI , data).pipe(catchError(this.handleError));
  }

  getCategories() {
    return this.httpClient.get(this.RestAPI).pipe(
      map((response: any) => response.data),
      catchError((error: any) => {
        console.error('Error fetching categories', error);
        throw error;
      })
    );
  }

  getCategory(id: any): Observable<any> {
    let APIUrl = `${this.RestAPI}/${id}`
    return this.httpClient.get(APIUrl, {headers: this.httpHeaders})
    .pipe(map((res: any) => {
        res || {}
      }),
      catchError(this.handleError)
    );
  }

  updateCategory(id: any,data: Category): Observable<any> {
    let APIUrl = `${this.RestAPI}/${id}`
    return this.httpClient.put(APIUrl, data, {headers: this.httpHeaders})
    .pipe(catchError(this.handleError));
  }

  deleteCategory(id: any): Observable<any> {
    let APIUrl = `${this.RestAPI}/${id}`
    return this.httpClient.delete(APIUrl, {headers: this.httpHeaders})
    .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error code: ${error.status}\n Message: ${error.message} `;
    }
    console.log(errorMessage);
    return throwError(() => new Error(errorMessage));
  }

}
