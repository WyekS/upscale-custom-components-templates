import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ContactData } from '../../model/contact.model';

@Component({
  selector: 'app-component-form',
  templateUrl: './component-form.component.html',
  styleUrls: ['./component-form.component.css']
})
export class ComponentFormComponent implements OnInit {

  @Input()
  contact:ContactData = new ContactData('', '', '');

  constructor() { }

  contactAction(): void {
    console.log(JSON.stringify(this.contact));
  }

  ngOnInit(): void {
    this.contact = new ContactData('', '', '');
  }

}
