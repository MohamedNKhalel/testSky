import { AfterViewInit, Component, OnInit, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/sharedModules/shared/shared.module';
import { DataService } from 'src/app/services/data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TypewriterService } from 'src/app/services/typewriter.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,SharedModule,MatSnackBarModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit , AfterViewInit {
  loader:boolean = false;
  text:string = "";
  fulltext:string = "SKYBUILDERS - CONTACT";
  isLoading:boolean = false;
  constructor(private _DataService:DataService,private _MatSnackBar:MatSnackBar,private _TypewriterService:TypewriterService){}
  ngOnInit(): void {
    this.loader = true;
    this._TypewriterService.typeWriting(this.fulltext,(text:string)=>{
      this.text = text;
    })
    
  }
  ngAfterViewInit(): void {
    setTimeout(()=>{
      this.loader  = false
    },3000)
  }
  contactForm:FormGroup =  new FormGroup({
    firstName : new FormControl(null,[Validators.required]),
    lastName : new FormControl(null,[Validators.required]),
    email : new FormControl(null,[Validators.required,Validators.email]),
    phone : new FormControl(null,[Validators.required,Validators.pattern(/^(01)[0125][0-9]{8}$/)]),
    description : new FormControl(null,[Validators.required]),
  })


  toggleLoading(){
    this.isLoading = !this.isLoading;
  }
  clearForm(){
      this.contactForm.get('firstName')?.setValue(null)
      this.contactForm.get('lastName')?.setValue(null)
      this.contactForm.get('email')?.setValue(null)
      this.contactForm.get('description')?.setValue(null)
      this.contactForm.get('phone')?.setValue(null)
  }
  addNewContact(){
    if(this.contactForm.valid){
      this.toggleLoading()
      let model = {
        name : `${this.contactForm.get('firstName')?.value} ${this.contactForm.get('lastName')?.value}`,
        email : this.contactForm.get('email')?.value,
        description :this.contactForm.get('description')?.value,
        phone : this.contactForm.get('phone')?.value
      }
      this._DataService.addNewContact(model).subscribe({
        next:data=>{
          this.toggleLoading()
          this._MatSnackBar.open("message sent successfully", "Discard");
          
        },
        error:err=>{
          this.toggleLoading()
          this._MatSnackBar.open("error sending the message", "Discard");
        }
      })
    }
  }
}
