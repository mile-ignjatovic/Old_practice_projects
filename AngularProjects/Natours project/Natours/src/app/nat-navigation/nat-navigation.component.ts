import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'nat-navigation',
  templateUrl: './nat-navigation.component.html',
  styleUrls: ['./nat-navigation.component.scss'],
})
export class NatNavigationComponent implements OnInit{

    checkboxValue: boolean;
    form: FormGroup;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.form = new FormGroup({});
        this.form.addControl('navCheckbox', new FormControl(undefined, []));
        this.form.get('navCheckbox').valueChanges.subscribe((data) => {
            this.checkboxValue = data;
        });
    }

    uncheckNav() {
        if (this.checkboxValue) {
            this.form.get('navCheckbox').setValue(false);
        } else {
            this.form.get('navCheckbox').setValue(true);
        }
    }
}
