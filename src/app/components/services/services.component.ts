import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypewriterService } from 'src/app/services/typewriter.service';
import { RouterLink } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Client } from 'src/app/interfaces/client';
import { FormsModule } from '@angular/forms';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { SharedModule } from 'src/app/sharedModules/shared/shared.module';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule,MatSnackBarModule,SharedModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  providers:[]
})
export class ServicesComponent implements OnInit , AfterViewInit{
  loader:boolean = false;
  text:string = "";
  fulltext:string = "SKYBUILDERS - SERVICES";
  isRating:boolean = false;
  hoverIndex: number = 0;
  selectedRating: number = 0; 
  name:string = '';
  opinion:string = '';
  rate:number = 0;
  isValidComment:boolean= false;
  errMsg:string = "";
  isLoading:boolean = false;
  seeAllClicked:boolean =false;
  clients:any[] = [
    {
      name:"macdonalds",
      image:"../../../assets/Images/mac.png"
    },
    {
      name:"circle k",
      image:"../../../assets/Images/circlek.png"
    },
    {
      name:"macdonalds",
      image:"../../../assets/Images/mac.png"
    },
    {
      name:"circle k",
      image:"../../../assets/Images/circlek.png"
    },
    {
      name:"macdonalds",
      image:"../../../assets/Images/mac.png"
    },
    {
      name:"circle k",
      image:"../../../assets/Images/circlek.png"
    },
    {
      name:"macdonalds",
      image:"../../../assets/Images/mac.png"
    },
    {
      name:"circle k",
      image:"../../../assets/Images/circlek.png"
    },
    {
      name:"macdonalds",
      image:"../../../assets/Images/mac.png"
    },
    {
      name:"circle k",
      image:"../../../assets/Images/circlek.png"
    },
    {
      name:"macdonalds",
      image:"../../../assets/Images/mac.png"
    },
    {
      name:"circle k",
      image:"../../../assets/Images/circlek.png"
    },
    {
      name:"macdonalds",
      image:"../../../assets/Images/mac.png"
    },
    {
      name:"circle k",
      image:"../../../assets/Images/circlek.png"
    },
  ]
  services:any[] = [
    {
      name:'Architectural Design',
      image:'./../../../assets/Images/services/Architectural.jpg',
      num:1
    },
    {
      name:'Structural design',
      image:'./../../../assets/Images/services/Structural.jpg',
      num:2
    },
    {
      name:'Licensing works',
      image:'./../../../assets/Images/services/Licensing.jpg',
      num:3
    },
    {
      name:'Finishing & decoration',
      image:'./../../../assets/Images/services/Finishing.jpg',
      num:4
    },
    {
      name:'Concrete works',
      image:'./../../../assets/Images/services/Concrete.jpg',
      num:5
    },
    {
      name:'Real Estate Development',
      image:'./../../../assets/Images/services/Investment.jpg',
      num:6
    },
    
  ]
  constructor(private _MatSnackBar:MatSnackBar,private _TypewriterService:TypewriterService,private _DataService:DataService){}

  ngOnInit(): void {
    this._TypewriterService.typeWriting(this.fulltext,(text:string)=>{
      this.text = text;
    });
      this.loader = true
    }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loader = false
    }, 3000);
  }
  openSnackBar(message: string, action: string) {
    this._MatSnackBar.open(message, action);
  }

  resetInputs(){
    this.name = "";
    this.opinion = "";
    this.selectedRating = 0;
    this.isRating = false;
    this.errMsg = '';
  }
  addClient(){
    if(this.name != '' && this.opinion != '' && this.rate > 0){
      this.isLoading = true
      this.errMsg = "";
      const model:Client= {
        name:this.name,
        opinion:this.opinion,
        rate:this.rate.toString()
      }
      this._DataService.addNewClient(model).subscribe({
        next:data=>{
          this.openSnackBar("comment Sent","discard")
          this.resetInputs();
        },
        error:err=>{
          console.log(err);
          this.isLoading = false
          
        }
      })
    }
    else{
      this.errMsg = "fill all fields"
    }
  }
  onHover(index: number): void {
    this.hoverIndex = index;
  }
  setRating(index: number): void {
    this.selectedRating = index;
    this.rate = this.selectedRating;
  }
  resetHover(): void {
    this.hoverIndex = 0;
  }
  
}
