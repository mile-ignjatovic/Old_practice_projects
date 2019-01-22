import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {User} from './User';

@Injectable()
export class UserService {

  constructor(private http: Http) {
    console.log("UserService::constructor();");
  }

  getUsers(): Promise<User[]> {
    console.log("userService::getUsers();");

    return this.http.get("http://localhost:3000/users")
      .toPromise()
      .then((res: any) => res.json())
      .catch(this.error);
  }

  userRemove(userID: number): Promise<User> {
    console.log("userService::userRemove(" + userID + ");");

    return this.http.delete("http://localhost:3000/users" + userID)
      .toPromise()
      .then(response => response.json())
      .catch(this.error);
  }

  addUser(user: User): Promise<User> {
    console.log("userService::addUser();");

    return this.http.post("http://localhost:3000/users", user)
      .toPromise()
      .then(response => response.json())
      .catch(this.error);
  }

  getUser(userID: number): Promise<User> {
    console.log("userService::getUser(" + userID + ");");

    return this.http.get("http://localhost:3000/users/" + userID)
      .toPromise()
      .then(res => res.json())
      .catch(this.error);
  }

  error(err): Promise<string> {
    console.log(err);

    return Promise.reject("userService::error(" + err + ");");
  }

}
