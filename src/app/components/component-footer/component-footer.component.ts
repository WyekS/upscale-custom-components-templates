import { Component, OnInit } from '@angular/core';
import { UppEventHandlerService } from 'src/app/uppcomm/upp-event-handler.service';

@Component({
  selector: 'app-component-footer',
  templateUrl: './component-footer.component.html',
  styleUrls: ['./component-footer.component.css']
})
export class ComponentFooterComponent implements OnInit {

  constructor(private uppEventHandlerService: UppEventHandlerService) { }

  ngOnInit(): void {
    this.uppEventHandlerService.sendStartupEvents(473);
  }

}
