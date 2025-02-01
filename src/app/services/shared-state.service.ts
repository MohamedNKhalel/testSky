import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedStateService {

  isLightPage:boolean = false;
  constructor(private _Router:Router) {
    this._Router.events.subscribe(()=>{
      this.isLightPage = this._Router.url.includes('/contact');
    })

  }
}
