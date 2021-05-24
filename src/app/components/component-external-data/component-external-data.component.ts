import { Component, OnInit } from '@angular/core';
import { StoreData } from 'src/app/model/store.model';
import { ExternalDataService } from 'src/app/services/external-data.service';
import { UppEventHandlerService } from 'src/app/uppcomm/upp-event-handler.service';

@Component({
  selector: 'app-component-external-data',
  templateUrl: './component-external-data.component.html',
  styleUrls: ['./component-external-data.component.css']
})
export class ComponentExternalDataComponent implements OnInit {

  stores!: Array<StoreData>;
  data$!: Promise<StoreData[]>;

  // Subscribe option
  //connection:Subscription;
  //data$:Observable<StoreData[]>;

  azul: string = 'bg-primary';

  constructor(private externalDataService: ExternalDataService,
    private uppEventHandlerService: UppEventHandlerService) { }

  ngOnInit(): void {
    this.uppEventHandlerService.sendStartupEvents(800);
    this.data$ = this.externalDataService.getStores();

    // Subscribe option
    /* this.connection = this.externalDataService.getStores().subscribe((data) => {
      this.stores = data['records'];
    }) */
  }

  ngOnDestroy() {
    console.log('Unsubscribe from observable');
    //this.conexion.unsubscribe()
  }
}
