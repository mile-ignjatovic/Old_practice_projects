import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Hero } from '../hero';
import { NgForm, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

    // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  constructor() {
  }

  ngOnInit() {
  }


  newHero(form: NgForm) {
    this.model = new Hero(42, '', '');
    form.resetForm();
    this.submitted = true;
  }
  onSubmit() {
    this.submitted = !this.submitted;
  }

}


