import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home" , loadComponent:()=>import("./components/home/home.component").then((m)=>m.HomeComponent),title:"Home"},
  {path:"portfolio" , loadComponent:()=>import("./components/portfolio/portfolio.component").then((m)=>m.PortfolioComponent),title:"Portfolio"},
  {path:"portfolio/:id" , loadComponent:()=>import("./components/project-details/project-details.component").then((m)=>m.ProjectDetailsComponent),title:"Details"},
  {path:"services" , loadComponent:()=>import("./components/services/services.component").then((m)=>m.ServicesComponent),title:"Services"},
  {path:"contact" , loadComponent:()=>import("./components/contact/contact.component").then((m)=>m.ContactComponent),title:"Contact Us"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
