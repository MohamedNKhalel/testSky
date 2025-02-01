import { Project } from './../../interfaces/project';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { SharedModule } from 'src/app/sharedModules/shared/shared.module';
import { TypewriterService } from 'src/app/services/typewriter.service';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule,RouterLink,SharedModule],
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit,AfterViewInit {

  projectId:string | null = '';
  project!:Project ;
  ProjectCover:string = '';
  ProjectBackground:string = '';
  allProjects:Project[] =[];
  loader:boolean = false;
  text:string = "";
  fulltext:string = "SKYBUILDERS - Project"
  constructor(private _Router:Router,private _TypewriterService:TypewriterService , private _ActivatedRoute:ActivatedRoute,private _DataService:DataService){}
  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe({
        next:param=>{
          this.projectId = param.get('id')
          console.log(param.get('id'));
        },
        error:err=>{
          console.log(err);
        }
      });
      this.getProjectById();
      this.getAllProjects();
      this.loader = true;
      this._TypewriterService.typeWriting(this.fulltext,(text:string)=>{
        this.text = text;
      })
  }
  ngAfterViewInit(): void {
    setTimeout(()=>{
      this.loader  = false
    },2000)
  }
  goToSpecific(id:string){
    this.projectId = id;
    this.getProjectById();
    this._Router.navigate(['/portfolio',this.projectId])
  }
  getAllProjects(){
    this._DataService.getProjects().subscribe({
      next:(data:Project[])=>{
        console.log(data);
        this.allProjects = data;
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }
  getProjectById(){
    this._DataService.getProjectById(this.projectId).subscribe({
      next:(data:Project)=>{
        this.project = data;
        this.ProjectCover = data.projectCover;
        this.ProjectBackground = data.projectCover;
        
      },
      error:err=>{
        console.log(err);
      }
    })
  }
}
