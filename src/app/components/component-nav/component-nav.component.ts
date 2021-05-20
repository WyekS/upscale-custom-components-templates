import { Component, Input, OnInit } from '@angular/core';
import Menu from 'src/app/model/menu.model';

@Component({
  selector: 'app-component-nav',
  templateUrl: './component-nav.component.html',
  styleUrls: ['./component-nav.component.css']
})
export class ComponentNavComponent implements OnInit {

  @Input()
  options: Array<[string, string]> = new Menu([
    ['Show table component', '/example-table'],
    ['Show external data component', '/example-external-data'],
    ['Show simple form component', '/example-form']
  ]).items;

  constructor() { }

  ngOnInit(): void { }

}
