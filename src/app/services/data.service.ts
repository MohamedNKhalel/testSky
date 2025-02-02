import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  fullText:string = "SKY BUILDERS...";
  text:string = "";
  
  baseUrl:string = environment.apiUrl;
  constructor(private _HttpClient:HttpClient) {
    
}

  addNewContact(model:any):Observable<any>
  { 
    return this._HttpClient.post(`${this.baseUrl}/contact`,model);
  }
  getProjects():Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}/project`);
  }
  getProjectById(id:string | null):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}/project/${id}`)
  }
  getAllCategories():Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}/category`);
  }
  getProjectsByCategory(name:string):Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}/projects/${name}`)
  }
  addNewClient(model:any):Observable<any>
  {
    return this._HttpClient.post(`${this.baseUrl}/client`,model)
  }
  
}
