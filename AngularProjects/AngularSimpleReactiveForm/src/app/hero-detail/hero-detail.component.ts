import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { states, Address, Hero } from '../data-model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  heroForm: FormGroup;
  states = states;

  @Input() hero: Hero;

  constructor(private fb: FormBuilder) {this.createForm(); }

  ngOnInit() {
  }

  // koristi se formBuilder jer onda ne moram da pravim vise new FormControl() fb je factory patern za to
  createForm() {
    this.heroForm = this.fb.group({ // <--parent form group
      name: ['', Validators.required],
      adress: this.fb.group(new Address()),  // <-- a FormGroup with a new address
    /*    address: this.fb.group({  // <--child form group
          street: '',
          city: '',
          state: '',
          zip: ''}),  */
      power: '',
      sidekick: ''
    });
  }

}
