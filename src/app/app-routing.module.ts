import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",loadComponent:()=>import("./components/home/home.component").then(m=>m.HomeComponent),title:"Skybuilders"},
  {path:"portfolio" , loadComponent:()=>import("./components/portfolio/portfolio.component").then((m)=>m.PortfolioComponent),title:"Skybuilders"},
  {path:"portfolio/:id" , loadComponent:()=>import("./components/project-details/project-details.component").then((m)=>m.ProjectDetailsComponent),title:"Skybuilders"},
  {path:"services" , loadComponent:()=>import("./components/services/services.component").then((m)=>m.ServicesComponent),title:"Skybuilders"},
  {path:"contact" , loadComponent:()=>import("./components/contact/contact.component").then((m)=>m.ContactComponent),title:"Skybuilders"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
