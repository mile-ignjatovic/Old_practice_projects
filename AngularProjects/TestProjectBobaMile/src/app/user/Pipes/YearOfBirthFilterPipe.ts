import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../User';

@Pipe({name: 'yearFilterPipe'})
export class YearOfBirthFilterPipe implements PipeTransform {

    transform(users: User[], yearOfBirth: number): User[] {

        let temp_users = [];
        let len = users.length;

        if (!yearOfBirth) {
            return users;
        }

        for (let i = 0; i < len; i++) {
            if (users[i].yearOfBirth == yearOfBirth) {
                temp_users.push(users[i]);
            }
        }
        
        return temp_users;
    }
}