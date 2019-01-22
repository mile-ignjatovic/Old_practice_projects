import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nat-book',
  templateUrl: './nat-book.component.html',
  styleUrls: ['./nat-book.component.scss'],
})
export class NatBookComponent implements OnInit {

    ngOnInit(): void {

    }

    storeUserData(fullName: any, email: any) {
        console.log(fullName.value, email.value);
    }
}
