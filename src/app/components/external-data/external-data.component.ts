import {
  Component,
  NgZone,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { StoreData } from 'src/app/model/store.model';
import { ExternalDataService } from 'src/app/services/external-data.service';
import { UppEventHandlerService } from 'src/app/uppcomm/upp-event-handler.service';
import { AbstractComponent } from '../abstract.component';

@Component({
  selector: 'app-external-data',
  templateUrl: './external-data.component.html',
  styleUrls: ['./external-data.component.css'],
})
export class ExternalDataComponent extends AbstractComponent implements OnInit {
  @ViewChild('container') container: ElementRef | undefined;

  stores!: Array<StoreData>;
  data$!: Promise<StoreData[]>;

  // Subscribe option [ Uncomment code to try with the subscribe feature ]
  //connection:Subscription;
  //data$:Observable<StoreData[]>;

  azul: string = 'bg-primary';

  constructor(
    public zone: NgZone,
    public uppEventHandlerService: UppEventHandlerService,
    private _externalDataService: ExternalDataService,
  ) {
    super(zone, uppEventHandlerService, 800);
  }

  ngOnInit(): void {
    this.data$ = this._externalDataService.getStores();

    // Subscribe option
    /* this.connection = this.externalDataService.getStores().subscribe((data) => {
      this.stores = data['records'];
    }) */
  }

  ngAfterViewInit() {
    this.perform(this.container);
  }

  ngOnDestroy() {
    console.log('Unsubscribe from observable');
    //this.conexion.unsubscribe()
  }
}
