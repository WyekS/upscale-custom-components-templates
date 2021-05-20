import { Component, OnInit, Input } from '@angular/core';

import { StoreData } from '../../model/store.model';

@Component({
  selector: 'app-component-external-data-aux',
  templateUrl: './component-external-data-aux.component.html',
  styleUrls: ['./component-external-data-aux.component.css']
})
export class ComponentExternalDataAuxComponent implements OnInit {

  @Input()
  data:StoreData = new StoreData('', '', '', '');

  constructor() { }

  ngOnInit(): void {
  }

}