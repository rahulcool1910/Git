import { GeneralService } from './../../service/general-service.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  length: Number = 0;
  find: String = '';

  constructor(private service: GeneralService, private http: HttpClient) {}

  ngOnInit(): void {
    this.service.getCartSize().subscribe((length) => {
      this.length = length;
    });
  }

  search() {
    this.service.searchString(this.find);
  }
}
