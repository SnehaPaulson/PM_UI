import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {

  transform(items: any[], filterUser: String): any {
        return items.filter( user => {
      
           if(filterUser && (user.firstName.toLowerCase().indexOf(filterUser.toLowerCase()) == -1))
             {
               return false;
             }
             return true;
           });
  }

}
