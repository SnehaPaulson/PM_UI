import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchProject'
})
export class SearchProjectPipe implements PipeTransform {

  transform(items: any[], filterProject: String): any {
    return items.filter( project => {
  
       if(filterProject && (project.project.toLowerCase().indexOf(filterProject.toLowerCase()) == -1))
         {
           return false;
         }
         return true;
       });
}


}
