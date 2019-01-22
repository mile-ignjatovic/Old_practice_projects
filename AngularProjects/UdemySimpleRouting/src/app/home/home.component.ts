import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFakeService } from '../authFakeService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private router: Router, private authService: AuthFakeService) { }

  ngOnInit() {
  }

  onLoadServer(id: number) {
    // complex calculations
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'});
  }

  onLogIn() {
    this.authService.login();
  }
  onLogOut() {
    this.authService.logout();
  }

}
