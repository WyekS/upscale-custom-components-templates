import { Component, OnInit } from '@angular/core';
import { UppEventHandlerService } from '../../uppcomm/upp-event-handler.service';
import { UppEvent } from '../../uppcomm/model/upp-event.model';
import { ComponentContext } from 'src/app/model/componentContext.model';
import { ExternalDataService } from '../../services/external-data.service';
import { LocalStorageService } from '../../services/LocalStorage.service';

@Component({
  selector: 'app-similarproductpreferences',
  templateUrl: './similarproductpreferences.component.html',
  styleUrls: ['./similarproductpreferences.component.css']
})
export class SimilarproductpreferencesComponent implements OnInit {
  context!: ComponentContext;
  categoryLoaded: any;
  accessToken: any;
  productsInSellingTree = [];
  constructor(
    private uppEventHandlerService: UppEventHandlerService,
    private externalDataService: ExternalDataService,
    private localStorage: LocalStorageService 
    ) {}

  ngOnInit(): void {
    this.accessToken = this.localStorage.getItem('AccessToken');
    this.uppEventHandlerService.sendStartupEvents(300);
    this.initData();
  }

  initData() {

    // this.context = event.data.keys;
    this.externalDataService.getProductsInSellingTree("568006af-7ef6-4788-bbbe-508756004428",this.accessToken).subscribe(
      (response: any)=>{
        console.log("get products from selling tree fired")
        console.log(response);
        this.productsInSellingTree = response.content;
        console.log(this.productsInSellingTree)
      }
    )

    window.addEventListener(
      'message',
      (event: UppEvent<ComponentContext>) => {
        console.log('Incoming event ', event);
        if (event.data.eventType == 'component_context') {
          // fetch products in the parent category of the product that is added to cart
          this.context = event.data.keys;
          this.externalDataService.getProductsInSellingTree(this.context,this.accessToken).subscribe(
            (response: any)=>{
              console.log("get products from selling tree fired")
              console.log(response);
              this.productsInSellingTree = response.content;
              console.log(this.productsInSellingTree)
            }
          )
        }
        if (event.data.eventType == 'browse_category_loaded') {
          this.categoryLoaded = event.data.keys;
        }
      },
      true
    );
  }
}

export interface Product {
  productCode: string,
  description: string
};
