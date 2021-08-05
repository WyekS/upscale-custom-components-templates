import {
  Component,
  ElementRef,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';
import { UppEventHandlerService } from '../../uppcomm/upp-event-handler.service';
import { UppEvent } from '../../uppcomm/model/upp-event.model';
import { ComponentContextData } from 'src/app/model/component-context.model';
import { ExternalDataService } from '../../services/external-data.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { environment } from 'src/environments/environment';
import { ProductData } from 'src/app/model/product.model';
import {
  ACCESS_TOKEN,
  EVENT_COMPONENT_CONTEXT,
} from 'src/app/constants/constants';
import { AbstractComponent } from '../abstract.component';

@Component({
  selector: 'app-similarproductpreferences',
  templateUrl: './similar-product-preferences.component.html',
  styleUrls: ['./similar-product-preferences.component.css'],
})
export class SimilarProductPreferencesComponent
  extends AbstractComponent
  implements OnInit
{
  @ViewChild('container') container: ElementRef | undefined;

  context!: ComponentContextData;
  accessToken: any;
  productsInSellingTree!: ProductData[];

  constructor(
    public zone: NgZone,
    public uppEventHandlerService: UppEventHandlerService,
    private _externalDataService: ExternalDataService,
    private _localStorage: LocalStorageService
  ) {
    super(zone, uppEventHandlerService, 0);
    this.accessToken = this._localStorage.getItem(ACCESS_TOKEN);
  }

  ngOnInit(): void {
    this.initData();
  }

  ngAfterViewInit() {
    this.perform(this.container);
  }

  private initData() {
    if (environment.production) {
      window.addEventListener(
        'message',
        (event: UppEvent<ComponentContextData>) => {
          console.log('Incoming event ', event);

          if (event.data.eventType == EVENT_COMPONENT_CONTEXT) {
            // fetch products in the parent category of the product that is added to cart
            this.context = event.data.keys;
            console.log(
              'Querying products by sellingTreeId [' +
                this.context.sellingTreeId +
                '] and language [' +
                this.context.language +
                ']'
            );
            this.initProductsBySellingTree(
              this.context.sellingTreeId,
              this.context.language
            );
          }
        },
        true
      );
    } else {
      this.initProductsBySellingTree(
        environment.mockedIds.sellingTreeId,
        environment.mockedIds.language
      );
    }
  }

  private initProductsBySellingTree(sellingTree: string, language: string) {
    this._externalDataService
      .getProductsInSellingTree(sellingTree, this.accessToken, language)
      .subscribe((response: any) => {
        this.productsInSellingTree = response.content;
        console.log(
          'Products in sellingTree ' + sellingTree,
          this.productsInSellingTree
        );
      });
  }
}
