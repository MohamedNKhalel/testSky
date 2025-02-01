import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]'
})
export class ScrollAnimateDirective {

  @Input() animationClass: string = 'fade-in-animate'; // Default animation class
  @Input() hiddenClass: string = 'hidden-animate'; // Default hidden class
  @Input() delay: number = 150; // Delay between animations
  
  private ticking = false; // Prevents excessive scroll event calls

  constructor(private _ElementRef:ElementRef) { 
    this._ElementRef.nativeElement.classList.add(this.hiddenClass)
  }

  @HostListener('window:scroll')
  onScroll() {
    if (!this.ticking) {
      requestAnimationFrame(() => {
        this.checkVisibility();
        this.ticking = false;
      });
      this.ticking = true;
    }
  }

  private checkVisibility(){
    const rect = this._ElementRef.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if(rect.top < windowHeight){
      setTimeout(() => {
        this._ElementRef.nativeElement.classList.remove(this.hiddenClass)
        this._ElementRef.nativeElement.classList.add(this.animationClass)
      }, this.delay);
    }
    else{
      setTimeout(() => {
        this._ElementRef.nativeElement.classList.add(this.hiddenClass)
        this._ElementRef.nativeElement.classList.remove(this.animationClass)
      }, this.delay);
    }
  }

}
