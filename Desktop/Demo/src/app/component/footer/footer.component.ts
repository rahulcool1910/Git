
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() todo;
  @Output() getevent = new EventEmitter<string>();
  constructor(private params:ActivatedRoute){

  }


  ngOnInit(): void {

  }

  return() {
     this.getevent.emit('returned someting')
    console.log("vjsdjkv")
  }

}
