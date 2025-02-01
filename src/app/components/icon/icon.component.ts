import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  constructor(private _Renderer2:Renderer2){}
  @ViewChild('icons') iconsElement!:ElementRef
  @HostListener('window:scroll')
  onScroll(){
    if(window.scrollY > 500){
      this._Renderer2.addClass(this.iconsElement.nativeElement,'fade-in-nav')
      this._Renderer2.removeClass(this.iconsElement.nativeElement,'fade-out-nav')
    }
    else{
      this._Renderer2.addClass(this.iconsElement.nativeElement,'fade-out-nav')
      this._Renderer2.removeClass(this.iconsElement.nativeElement,'fade-in-nav')
      
    }
  }


  returnTop(){
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }
}
