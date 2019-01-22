import {Component, OnInit} from '@angular/core';

import {User} from '../user/User';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../user/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit() {
    console.log("UserDetailsComponent ngOnInit()");
    this.activatedRoute.params.subscribe( params => {
      let id = +params['ID'];
      if(id){
        this.loadUser(id);
      }
    })
  }

  private loadUser(id: number) {
    this.userService.getUser(id)
      .then( user => this.user = user);
  }
}
