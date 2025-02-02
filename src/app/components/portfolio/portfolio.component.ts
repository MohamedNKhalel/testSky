import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { Category, Project } from 'src/app/interfaces/project';
import { RouterLink } from '@angular/router';
import { SharedModule } from 'src/app/sharedModules/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { TypewriterService } from 'src/app/services/typewriter.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule,RouterLink,SharedModule,FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit{
projects:Project[] = [];
categories:Category[] = [];
catName:string = '';
interoirIsClicked:boolean = false;
  constructor(private _DataService:DataService , private _TypewriterService:TypewriterService){}
  loader:boolean = false;
  text:string = "";
  fulltext:string = "SKYBUILDERS - PORTFOLIO"
  ngOnInit(): void {
      this.getProjects(); 
      this.getCategories();
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
  move(direction:string,element:HTMLElement){
    if(direction == "left"){
      element.scrollBy({
      left:-390,
      behavior:"smooth"
      })
    }
    else if(direction == "right"){
      element.scrollBy({
      left:390,
      behavior:"smooth"
      })
    }
  }
  getProjects(){
    this._DataService.getProjects().subscribe({
      next:data=>{
        console.log(data);
        this.projects = data;
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }
  getProjectsByCat(name:string){
    this._DataService.getProjectsByCategory(name).subscribe({
      next:data=>{
        this.projects = data;
      },
      error:err=>{
        console.log(err);
      }
    })
  }
  getCategories(){
    this._DataService.getAllCategories().subscribe({
      next:data=>{
        console.log(data);
        this.categories = data;
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }
  filterProjects(event:any)
  {
    if(event.target.value === "all"){
      this.getProjects();
      this.getCategories();
    }else{
      this.getProjectsByCat(event.target.value);
      this.catName = event.target.value;
    }
    
  }
}
