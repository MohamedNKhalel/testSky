import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from "./components/nav/nav.component";
import {HttpClientModule} from "@angular/common/http"
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from "./components/footer/footer.component";
import { CatSearchPipe } from './pipes/cat-search.pipe';
import { IconComponent } from "./components/icon/icon.component";
import { ScrollAnimateDirective } from './directives/scroll-animate.directive';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavComponent, HttpClientModule, ReactiveFormsModule,
    FooterComponent,
    IconComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
