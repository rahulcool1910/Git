import { GeneralService } from './../../service/general-service.service';
import { Products } from './../../model/Products.model';
import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: Products[];
  clone: Products[];

  constructor(private service: GeneralService) {}

  ngOnInit(): void {
    this.service.get().subscribe((data) => {
      this.products = data;
      this.clone = data;
    });
    this.service.transferSearch().subscribe((x) => {
      this.clone = this.products.filter((product) => {
        return product.productname.toLowerCase().includes(x.toLowerCase());
      });
      if (x.length == 0) {
        this.clone = this.products;
      }
    });
  }
}
