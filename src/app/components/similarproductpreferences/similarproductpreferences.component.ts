import { Component, OnInit } from '@angular/core';
import { UppEventHandlerService } from '../../uppcomm/upp-event-handler.service';
import { UppEvent } from '../../uppcomm/model/upp-event.model';
import { ComponentContext } from 'src/app/model/componentContext.model';
@Component({
  selector: 'app-similarproductpreferences',
  templateUrl: './similarproductpreferences.component.html',
  styleUrls: ['./similarproductpreferences.component.css']
})
export class SimilarproductpreferencesComponent implements OnInit {

  context: any;

  constructor(
    private uppEventHandlerService : UppEventHandlerService
  ) { }

  ngOnInit(): void {
    this.uppEventHandlerService.sendStartupEvents(100);
    this.initData();
  }

  initData() {
    console.log("InitData initialized");
    window.addEventListener('message', (event: UppEvent<ComponentContext>) => {
      if (event.type == 'component_context') {
        // fetch products in the parent category of the product that is added to cart
        console.log("Component context executed");
        this.context = event.data;
      }
    }, false);
  }

}
