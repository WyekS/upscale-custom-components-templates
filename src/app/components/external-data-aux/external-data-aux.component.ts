import { Component, OnInit, Input } from '@angular/core';

import { StoreData } from '../../model/store.model';

@Component({
  selector: 'app-external-data-aux',
  templateUrl: './external-data-aux.component.html',
  styleUrls: ['./external-data-aux.component.css']
})
export class ExternalDataAuxComponent implements OnInit {

  @Input()
  data:StoreData = new StoreData('', '', '', '');

  constructor() { }

  ngOnInit(): void {
  }

}