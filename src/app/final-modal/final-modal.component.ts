import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-final-modal',
  templateUrl: './final-modal.component.html',
  styleUrls: ['./final-modal.component.scss']
})
export class FinalModalComponent implements OnInit {

  @Input() order;

  constructor() { }

  ngOnInit() {
    console.log(this.order);
  }

}
