import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UppEventHandlerService } from 'src/app/uppcomm/upp-event-handler.service';
import { ContactData } from '../../model/contact.model';

@Component({
  selector: 'app-component-form',
  templateUrl: './component-form.component.html',
  styleUrls: ['./component-form.component.css']
})
export class ComponentFormComponent implements OnInit {

  @Input()
  contact:ContactData = new ContactData('', '', '');

  constructor(private uppEventHandlerService: UppEventHandlerService) { }

  contactAction(): void {
    console.log(JSON.stringify(this.contact));
  }

  ngOnInit(): void {
    this.uppEventHandlerService.sendStartupEvents(300);
    this.contact = new ContactData('', '', '');
  }

}
