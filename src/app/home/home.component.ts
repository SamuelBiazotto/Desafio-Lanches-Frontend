import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { url } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items;
  constructor(private httpClient: HttpClient, private modalService: NgbModal) { }

  ngOnInit() {
    this.httpClient.get(url + 'sandwiches').subscribe(response => {
      console.log(response);
      this.items = response;
      this.items.map(item => {
        item.selected = false
      })
    })
  }


  selecSandwiche(index, sandwiche): any {
    if (document.getElementById('item' + index).getAttribute('class') == 'card red') {
      sandwiche.selected = false;
      document.getElementById('item' + index).removeAttribute('class');
      document.getElementById('item' + index).setAttribute('class', 'card');
      document.getElementById('item' + index).classList.add('removeClass');
    } else {
      document.getElementById('item' + index).removeAttribute('class');
      document.getElementById('item' + index).setAttribute('class', 'card');
      document.getElementById('item' + index).classList.add('red');
      sandwiche.selected = true;
    }
  }


  open() {
    let sandwichesSelecteds = [];
    this.items.map(item => {
      if (item.selected) {
        sandwichesSelecteds.push(item);
      }
    })
    const modalRef = this.modalService.open(ModalComponent, { size: 'lg' });
    modalRef.componentInstance.sandwichesSelecteds = sandwichesSelecteds;

    modalRef.result.then(resp => {
      console.log(resp);
    })
  }

}
