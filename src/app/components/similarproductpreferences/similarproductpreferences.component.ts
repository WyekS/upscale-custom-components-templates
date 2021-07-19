import { Component, OnInit } from '@angular/core';
import { UppEventHandlerService } from '../../uppcomm/upp-event-handler.service';
import { UppEvent } from '../../uppcomm/model/upp-event.model';
import { ComponentContext } from 'src/app/model/componentContext.model';
import { ExternalDataService } from '../../services/external-data.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-similarproductpreferences',
  templateUrl: './similarproductpreferences.component.html',
  styleUrls: ['./similarproductpreferences.component.css'],
})
export class SimilarproductpreferencesComponent implements OnInit {
  context!: ComponentContext;
  accessToken: any;
  productsInSellingTree!: any[];
  
  constructor(
    private uppEventHandlerService: UppEventHandlerService,
    private externalDataService: ExternalDataService,
    private localStorage: LocalStorageService
  ) {
    this.accessToken = this.localStorage.getItem('AccessToken');
  }

  ngOnInit(): void {
    this.uppEventHandlerService.sendStartupEvents(300);
    this.initData();
  }

  private initData() {
    if (environment.production) {
      window.addEventListener(
        'message',
        (event: UppEvent<ComponentContext>) => {
          console.log('Incoming event ', event);

          if (event.data.eventType == 'component_context') {
            // fetch products in the parent category of the product that is added to cart
            this.context = event.data.keys;
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
    this.externalDataService
      .getProductsInSellingTree(sellingTree, this.accessToken, language)
      .subscribe((response: any) => {
        console.log('get products from selling tree fired');
        this.productsInSellingTree = response.content;
        console.log(this.productsInSellingTree);
      });
  }
}

export interface Product {
  productCode: string;
  description: string;
}
