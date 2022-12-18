import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: string = 'https://vercel-learn.vercel.app/api/';
  constructor(public http: HttpClient) {}

  getProductById(id: string):Observable<any> {
    return this.http.get(this.baseUrl + 'product/get?id=' + id);
  }
}
