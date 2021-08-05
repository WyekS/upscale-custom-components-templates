import { Component, OnInit, ElementRef, ViewChild, Input, NgZone } from '@angular/core';
import { UppEventHandlerService } from 'src/app/uppcomm/upp-event-handler.service';
import { ContactData } from '../../model/contact.model';
import { AbstractComponent } from '../abstract.component';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css'],
})
export class SimpleFormComponent extends AbstractComponent implements OnInit {
  @ViewChild('container') container: ElementRef | undefined;

  @Input()
  contact: ContactData = new ContactData('', '', '');

  constructor(
    public zone: NgZone,
    public uppEventHandlerService: UppEventHandlerService
  ) {
    super(zone, uppEventHandlerService, 300);
  }

  ngOnInit(): void {
    this.contact = new ContactData('', '', '');
  }

  ngAfterViewInit() {
    this.perform(this.container);
  }

  contactAction(): void {
    console.log(JSON.stringify(this.contact));
    alert('Email sent, ' + this.contact.firstname);
  }

}
