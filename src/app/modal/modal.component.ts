import { url } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FinalModalComponent } from '../final-modal/final-modal.component';
// import { faCoffee, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() sandwichesSelecteds;
  ingredients: any = [];
  loading = true;
  orderArray = [];
  minus = faMinus;
  plusCircle = faPlusCircle;

  constructor(private http: HttpClient, public activeModal: NgbActiveModal,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.sandwichesSelecteds.forEach(element => {
      this.orderArray.push({ sandwiches: element, extraIngredients: [] });
    });

    this.http.get(url + '/ingredients').subscribe(response => {
      this.ingredients = response;
      this.ingredients.map(ingredient => {
        ingredient.quantity = 0;
      })
      this.sandwichesSelecteds.map(sandwiche => {
        sandwiche.extraIngredients = JSON.parse(JSON.stringify(this.ingredients));
        this.loading = false
      })
    },error => {
        console.log(error);
        this.loading = false;
    })
  }

  add(ingredient) {
    ingredient.quantity++;
  }

  remove(ingredient) {
    ingredient.quantity--;
  }

  save() {
    this.loading = true
    for (let i in this.sandwichesSelecteds) {
      this.orderArray[i].extraIngredients = []
      for (let j in this.sandwichesSelecteds[i].extraIngredients) {
        if (this.sandwichesSelecteds[i].extraIngredients[j].quantity > 0) {
          this.orderArray[i].extraIngredients.push(this.sandwichesSelecteds[i].extraIngredients[j])
        }
      }
    }
    console.log(this.orderArray);
    this.http.post(url + 'orders', this.orderArray).subscribe(response => {
      this.loading = false;
      this.activeModal.close();
      const modalRef = this.modalService.open(FinalModalComponent, { size: 'lg' });
      modalRef.componentInstance.order = response;

      modalRef.result.then(resp => {
        console.log(resp);
      })
      console.log(response);
    })
  }

}
