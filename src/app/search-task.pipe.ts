import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTask'
})
export class SearchTaskPipe implements PipeTransform {

  transform(items: any[], filterProject: String): any {
    return items.filter( task => {
  
       if(filterProject && (task.project.toLowerCase().indexOf(filterProject.toLowerCase()) == -1))
         {
           return false;
         }
         return true;
       });
}


}
