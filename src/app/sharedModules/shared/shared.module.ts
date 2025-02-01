import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { CatSearchPipe } from 'src/app/pipes/cat-search.pipe';
import { ScrollAnimateDirective } from 'src/app/directives/scroll-animate.directive';


@NgModule({
  declarations: [CatSearchPipe,ScrollAnimateDirective],
  imports: [CommonModule,RouterLink,RouterLinkActive,  MatFormFieldModule, MatInputModule, MatSelectModule,ReactiveFormsModule],
  exports:[RouterLink,RouterLinkActive,MatFormFieldModule, ScrollAnimateDirective,MatInputModule, MatSelectModule,ReactiveFormsModule,CatSearchPipe]

})
export class SharedModule { }
