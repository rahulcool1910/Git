import { Products } from './../../model/Products.model';
import { GeneralService } from './../../service/general-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  products: Products[] = [];
  constructor(private service: GeneralService) {}

  ngOnInit(): void {
    this.products = this.service.getCart();
  }
  remove(product: Products) {
    this.products = this.products.filter((x) => x != product);
    this.service.removefromcart(product);
  }
}
