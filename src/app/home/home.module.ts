import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { HomeComponent } from './home.component';
import { routing } from './home.router';
import { GrowlModule, MessagesModule,ButtonModule,DialogModule } from 'primeng/primeng';
import { FormGroup, FormControl, FormBuilder, Validator, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    routing,
    ButtonModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MessagesModule,
    GrowlModule
  ],
  declarations: [
    HomeComponent
  ],
  bootstrap: [
    HomeComponent
  ]
})
export class HomeModule {}
