import { Component, ElementRef, HostListener, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { TypewriterService } from 'src/app/services/typewriter.service';
import { Project } from 'src/app/interfaces/project';
import { SharedModule } from 'src/app/sharedModules/shared/shared.module';

declare var $:any;
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink,SharedModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{
  
  projects:Project[] = [];
  interiorProject:Project[] = []
  outdoorProject:Project[] = []
  constructionProject:Project[] = []
  loader:boolean = false;
  text:string = "";
  fulltext:string = "SKYBUILDERS"
  private ticking:boolean = false; // Prevents excessive updates
  seeAllClicked:boolean =false;
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
  constructor(private _DataService:DataService,private _TypewriterService:TypewriterService,private _Renderer2:Renderer2){}
  @ViewChildren('serviceCards') serviceCards!:QueryList<ElementRef>
  @ViewChildren('projects') projectsAnimate!:QueryList<ElementRef>
  @ViewChildren('upgrade') upgradeAnimate!:QueryList<ElementRef>
  @ViewChildren('aboutAnimate') aboutAnimate!:QueryList<ElementRef>

  @HostListener('window:scroll')
  onScroll() {
    if (!this.ticking) {
      requestAnimationFrame(() => {
        this.serviceCards.forEach((card, index) => {
          const rect = card.nativeElement.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          if (rect.top < windowHeight - 100) {
            setTimeout(() => {
              card.nativeElement.classList.remove('hidden-animate'); 
              card.nativeElement.classList.add('fade-in-animate'); 
            }, index * 150); 
          }else{
            setTimeout(() => {
              card.nativeElement.classList.add('hidden-animate'); 
              card.nativeElement.classList.remove('fade-in-animate'); 
            }, index * 150); 
            
          }
        });
        this.projectsAnimate.forEach((project,index)=>{
          const rect =  project.nativeElement.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          if(rect.top < windowHeight - 100){
            setTimeout(() => {
              project.nativeElement.classList.remove('hidden-animate'); 
              project.nativeElement.classList.add('fade-in-animate'); 
            }, index * 150);
          }
          else{
              setTimeout(() => {
                project.nativeElement.classList.add('hidden-animate'); 
                project.nativeElement.classList.remove('fade-in-animate'); 
              }, index * 150);
          }
        });
        
        this.upgradeAnimate.forEach((item,index)=>{
          const rect =  item.nativeElement.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          if(rect.top < windowHeight - 100){
            setTimeout(() => {
              item.nativeElement.classList.remove('hidden-animate'); 
              item.nativeElement.classList.add('fade-in-animate'); 
            }, index * 150);
          }
          else{
              setTimeout(() => {
                item.nativeElement.classList.add('hidden-animate'); 
                item.nativeElement.classList.remove('fade-in-animate'); 
              }, index * 150);
          }
        });
        this.aboutAnimate.forEach((item,index)=>{
          const rect =  item.nativeElement.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          if(rect.top < windowHeight - 100){
            setTimeout(() => {
              item.nativeElement.classList.remove('hidden-animate'); 
              item.nativeElement.classList.add('fade-in-animate'); 
            }, index * 150);
          }
          else{
              setTimeout(() => {
                item.nativeElement.classList.add('hidden-animate'); 
                item.nativeElement.classList.remove('fade-in-animate'); 
              }, index * 150);
          }
        });
        
        this.ticking = false; 
      });
      this.ticking = true; 
    }
  }
  ngOnInit(): void {
    this.getProjects();
    this.animateLogo()
    this.loader = true;
    this._TypewriterService.typeWriting(this.fulltext,(text:string)=>{
      this.text = text;
    })
  }
  ngAfterViewInit(): void {
    setTimeout(()=>{
      this.loader  = false
    },1800)
  }

  selectedProject:string = 'interior';
  logoText:string = "Sky builders"
  displayedLogoText:string = "";
  active:boolean = false;
  selectPrjectType(type:string){
    this.selectedProject = type;
    this.active = !this.active
  }
  getProjects(){
    this._DataService.getProjects().subscribe((data:Project[])=>{
      this.projects = data
      this.interiorProject = this.projects.filter(project => project.category.name == 'interior')
      this.outdoorProject = this.projects.filter(project => project.category.name == 'Outdoor')
      this.constructionProject = this.projects.filter(project => project.category.name == 'construction')
      console.log(this.projects);
      console.log(this.interiorProject);
      console.log(this.outdoorProject);
      console.log(this.constructionProject);
    })
  }
  animateLogo(){
    $('.title').animate({
      // height:"600px"
    },1000,"linear")
  }

}
