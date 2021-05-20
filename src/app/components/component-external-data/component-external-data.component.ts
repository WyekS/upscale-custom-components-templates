import { Component, OnInit } from '@angular/core';
import { StoreData } from 'src/app/model/store.model';
import { ExternalDataService } from 'src/app/services/external-data.service';

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

  azul:string = 'bg-primary';

  constructor(private externalDataService:ExternalDataService) { }

  ngOnInit(): void {

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
