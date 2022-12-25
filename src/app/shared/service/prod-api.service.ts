import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  IAddNewProductTable, IUpdateProductTable } from 'src/app/prod-management/prod-table/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: string = 'https://vercel-learn.vercel.app/api/';
  constructor(public http: HttpClient) {}

  getProductById(id: string):Observable<any> {
    return this.http.get(this.baseUrl + 'product/get?id=' + id);
  }

  //TODO: AddNew Product
  addNewProduct(product:IAddNewProductTable):Observable<any> {
    return this.http.post(this.baseUrl + 'product/new',product);
  }


  getAllProducts():Observable<any> {
    return this.http.get(this.baseUrl + 'product/get?all=true');
  }

  deleteProducts():Observable<any> {
    return this.http.delete(this.baseUrl + 'product/delete');
  }

  updateProduct(body:IUpdateProductTable){
    return this.http.put(this.baseUrl+'product/update',body)
  }

  login(body:{email:string,password:string}){
    return this.http.post(this.baseUrl+'auth/login',body)
  }
}
