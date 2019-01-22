import { Component } from '@angular/core';

@Component({
  selector: 'nat-contact-popup',
  templateUrl: './nat-contact-popup.component.html',
  styleUrls: ['./nat-contact-popup.component.scss'],
})
export class NatContactPopupComponent {
    sendMessage(text: string) {
        alert('Message sent! :) \n' + text);
    }
}
