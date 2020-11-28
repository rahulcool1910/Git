import { Products } from './../model/Products.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  cart: Products[] = [];
  cartlength = new Subject<Number>();
  searchTerm = new Subject<String>();
  constructor(private http: HttpClient) {}

  get(): Observable<Products[]> {
    return this.http.get<Products[]>('http://localhost:2519/api/products/get');
  }

  getone(id: String): Observable<Products> {
    return this.http.get<Products>(
      `http://localhost:2519/api/products/get/${id}`
    );
  }

  getCartSize() {
    return this.cartlength.asObservable();
  }

  addtocart(product: Products) {
    if (!this.cart.includes(product)) {
      this.cart.push(product);
    }
    this.cartlength.next(this.cart.length);
  }

  removefromcart(product: Products) {
    this.cart = this.cart.filter((x) => x !== product);
    this.cartlength.next(this.cart.length);
  }

  getCart() {
    return this.cart;
  }

  searchString(data: String) {
    this.searchTerm.next(data);
  }

  transferSearch() {
    return this.searchTerm.asObservable();
  }
}
