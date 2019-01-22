import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../User';

@Pipe({name: 'nameFilterPipe'})
export class NameFilterPipe implements PipeTransform {

    transform(users: User[], filterName: string): User[] {

        let temp_users = [];
        let len = users.length;

        if (!filterName) {
            return users;
        }

        for (let i = 0; i < len; i++) {
            if (users[i].name == filterName) {
                temp_users.push(users[i]);
            }
        }
        
        return temp_users;
    }
}