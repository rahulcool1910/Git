import { Products } from './../../model/Products.model';
import { GeneralService } from 'src/app/service/general-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  product: Products;
  constructor(
    private params: ActivatedRoute,
    private service: GeneralService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.params.params.subscribe((x) => {
      this.service.getone(x['id']).subscribe((data) => {
        this.product = data;
        console.log(data);
      });
    });
  }

  openSnackBar() {
    // console.log(this.product);
    this.service.addtocart(this.product);

    this._snackBar.open('Added to cart', 'close', {
      duration: 2000,
    });
    this.router.navigate(['']);
  }
}
