import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent {
  firstName = 'Sachin';
  lastName = 'Tendulkar';
  onSave() {
    //xử lý nút save
    console.log(this.firstName, this.lastName);
  }
}
