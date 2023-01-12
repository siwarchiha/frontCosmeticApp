import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productUrl:"http://localhost:8089/api/products"

  constructor(private http:HttpClient) { }
  addProduct(obj){
    return this.http.post(this.productUrl,obj);

 }
 getAllProducts(){
   return this.http.get(this.productUrl);
 }
 getProductById(id){
   return this.http.get(`${this.productUrl}/${id}`);
 }

 deleteProductById(id){
   return this.http.delete(`${this.productUrl}/${id}`);
 }
 ediProduct(obj){
   return this.http.put(`${this.productUrl}`, obj)
 }

}
