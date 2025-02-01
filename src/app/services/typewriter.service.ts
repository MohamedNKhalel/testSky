import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypewriterService {

  constructor() { }
  typeWriting(fullText:string,callBack:(text:string)=>void){
    for(let i = 0 ; i <= fullText.length;i++){
      setTimeout(() => {
        callBack(fullText.substring(0,i));
        if(i === fullText.length){
          setTimeout(() => {
            this.typeWriting(fullText,callBack);
          }, 1000);
        }
      }, i*100);
    }
  }
}
