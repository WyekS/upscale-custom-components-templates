import { Component, OnInit } from '@angular/core';
import { UppEventHandlerService } from '../../uppcomm/upp-event-handler.service';
import { UppEvent } from '../../uppcomm/model/upp-event.model';
import { ComponentContext } from 'src/app/model/componentContext.model';

@Component({
  selector: 'app-similarproductpreferences',
  templateUrl: './similarproductpreferences.component.html',
  styleUrls: ['./similarproductpreferences.component.css'],
})
export class SimilarproductpreferencesComponent implements OnInit {
  context!: ComponentContext;

  constructor(private uppEventHandlerService: UppEventHandlerService) {}

  ngOnInit(): void {
    this.uppEventHandlerService.sendStartupEvents(300);
    this.initData();
  }

  initData() {
    console.log('InitData initialized');
    window.addEventListener(
      'message',
      (event: UppEvent<ComponentContext>) => {
        console.log('Incoming event ', event);

        if (event.data.eventType == 'component_context') {
          // fetch products in the parent category of the product that is added to cart
          this.context = event.data.keys;
        }
      },
      true
    );
  }
}
