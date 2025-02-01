import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/sharedModules/shared/shared.module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,SharedModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{

  cuurentYear:number = 0;

  ngOnInit(): void {
      this.cuurentYear = new Date().getFullYear();
  }
  constructor(){}

}
