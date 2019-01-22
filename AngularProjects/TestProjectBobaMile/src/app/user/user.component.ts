import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';

import {User} from './User';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [];
  filteredUsers: User[] = [];

  userForm: FormGroup;
  filterForm: FormGroup;

  constructor(private userService: UserService,
              formBuilder: FormBuilder,
              private router: Router) {
    this.userForm = formBuilder.group({
      id: [null, null, CustomValidators.uniqueAsyncCheck(userService)],
      name: [null],
      lastName: [null],
      yearOfBirth: [0]
    });

    this.filterForm = formBuilder.group({
      name: [null],
      year: [null]
    });

    this.filterForm.valueChanges
      .subscribe(filter => {
        if (!filter.name && !filter.year) {

          this.filteredUsers = this.users;

        } else {

          this.filteredUsers = this.users.filter(user => {

            if (filter.name && filter.year) {
              return user.name === filter.name && user.yearOfBirth === filter.year;
            } else if (filter.name) {
              return user.name === filter.name;
            } else if (filter.year) {
              return user.yearOfBirth === filter.year;
            }

          });
        }
      })
  }

  ngOnInit() {
    /* Getting all the users from db */
    this.userService.getUsers()
      .then(users => {
        console.log(users);
        this.users = users;
        this.filteredUsers = users;
      });
  }

  /* Removing the user */
  userRemove(user: User) {

    let index = this.users.indexOf(user);
    this.users.splice(index, 1);

    this.userService.userRemove(user.id)
      .then(message => {
        console.log(message);
      });
  }

  /* Adding a user */
  addUser() {
    let user = this.userForm.value;

    let newUser = new User(user.id, user.name, user.lastName, user.yearOfBirth);

    this.userService.addUser(newUser)
      .then(user => this.router.navigate(['user', user.id]));
  }

  userInfo(user: User) {
    this.router.navigate(['user', user.id])
  }

}

export class CustomValidators {
  static uniqueAsyncCheck(userService: UserService) {
    return (control: AbstractControl) => {
      let error = {uniqueAsyncCheck: true};
      if(!control.value){
        return Promise.resolve(error);
      }
      return userService.getUser(control.value)
        .then(res => {
          return error;
        })
        .catch( error => null);
    };
  }
}
