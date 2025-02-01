import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SharedStateService } from 'src/app/services/shared-state.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor(private _Renderer2:Renderer2,public _SharedStateService:SharedStateService){}

  isClicked:boolean = false;

  isLightPage:boolean = false;
  ngOnInit(): void {
    this.isLightPage = this._SharedStateService.isLightPage;
  }
}
