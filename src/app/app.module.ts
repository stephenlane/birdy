import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.router';
import { RouterModule, Routes } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { GlobalService } from './globals.service';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  bootstrap: [
    AppComponent,
    TopNavigationComponent
  ],
  providers: [GlobalService]
})


export class AppModule {}
