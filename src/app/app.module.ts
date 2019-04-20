import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './modal/modal.component';
import { FinalModalComponent } from './final-modal/final-modal.component';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent,
    FinalModalComponent
  ],
  imports: [
    HttpClientModule,
    NgbModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgxLoadingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    ModalComponent,
    FinalModalComponent
  ]
})
export class AppModule { }
