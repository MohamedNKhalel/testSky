import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../interfaces/project';

@Pipe({
  name: 'catSearch'
})
export class CatSearchPipe implements PipeTransform {

  transform(projects:Project[],id:string): Project[] {
    return projects.filter(project=>project.category._id.toLowerCase().includes(id.toLowerCase()));
  }

}
