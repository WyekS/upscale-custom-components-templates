import { Component, Input, OnInit } from '@angular/core';
import Menu from 'src/app/model/menu.model';
import { UppEventHandlerService } from 'src/app/uppcomm/upp-event-handler.service';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {

  @Input()
  options: Array<[string, string]> = new Menu([
    ['Show external data component', '/example-external-data'],
    ['Show simple form component', '/example-form'],
    ['Show example preference', '/example-product-preference'],
  ]).items;

  constructor(private uppEventHandlerService: UppEventHandlerService) { }

  ngOnInit(): void {
    this.uppEventHandlerService.sendStartupEvents(200);
  }

}
