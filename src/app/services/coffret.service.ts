import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoffretService {
  coffretUrl: "http://localhost:8089/api/coffrets"

  constructor(private http: HttpClient) { }
  addCoffret(obj) {
    return this.http.post(this.coffretUrl, obj);

  }
  getAllCoffrets() {
    return this.http.get(this.coffretUrl);
  }
  getCoffretById(id) {
    return this.http.get(`${this.coffretUrl}/${id}`);
  }

  deleteCoffretById(id) {
    return this.http.delete(`${this.coffretUrl}/${id}`);
  }
  ediCoffret(obj) {
    return this.http.put(`${this.coffretUrl}`, obj)
  }
}
