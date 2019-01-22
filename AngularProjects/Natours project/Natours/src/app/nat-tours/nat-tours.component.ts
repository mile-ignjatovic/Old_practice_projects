import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nat-tours',
  templateUrl: './nat-tours.component.html',
  styleUrls: ['./nat-tours.component.scss'],
})
export class NatToursComponent implements OnInit {

    discoverBtnText: string;
    showAllTours: boolean;

    ngOnInit(): void {
        this.discoverBtnText = 'Discover All Tours';
        this.showAllTours = false;
    }

    toggleAllTours() {
        this.showAllTours = !this.showAllTours;
        if (!this.showAllTours) {
            this.discoverBtnText = 'Discover All Tours';
        } else {
            this.discoverBtnText = 'Show less';
        }
    }
}
