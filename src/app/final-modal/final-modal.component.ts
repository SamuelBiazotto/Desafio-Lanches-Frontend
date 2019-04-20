import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final-modal',
  templateUrl: './final-modal.component.html',
  styleUrls: ['./final-modal.component.scss']
})
export class FinalModalComponent implements OnInit {

  @Input() order;

  constructor(private activeModal: NgbActiveModal, private router: Router) { }

  ngOnInit() {
    console.log(this.order);
  }


  finish() {
    console.log('finish');
    this.activeModal.close();
    this.router.navigate(['/home']);
  }
}
