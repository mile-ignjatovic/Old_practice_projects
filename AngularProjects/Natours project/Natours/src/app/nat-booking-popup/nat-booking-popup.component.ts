import { Component } from '@angular/core';

@Component({
  selector: 'nat-booking-popup',
  templateUrl: './nat-booking-popup.component.html',
  styleUrls: ['./nat-booking-popup.component.scss'],
})
export class NatBookingPopupComponent {

    tours = [
        {name: 'Tour no 1', color: 'blue'},
        {name: 'Tour no 2', color: 'orange'},
        {name: 'Tour no 3', color: 'green'},
        {name: 'Tour no 4', color: 'blue'},
        {name: 'Tour no 5', color: 'blue'},
        {name: 'Tour no 6', color: 'green'},
        {name: 'Tour no 7', color: 'orange'},
        {name: 'Tour no 8', color: 'orange'}
    ];

    bookTour(tour: any) {
        console.log('TODO: get data from customer from booking and create an email to be sent to somewhere', tour);
    }

}
