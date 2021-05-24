import { Component, OnInit } from '@angular/core';
import { UppEvent } from '../../uppcomm/model/upp-event.model';
import { UppEventHandlerService } from '../../uppcomm/upp-event-handler.service';
import { ProductData } from '../../model/product.model';

@Component({
  selector: 'app-component-table',
  templateUrl: './component-table.component.html',
  styleUrls: ['./component-table.component.css']
})
export class ComponentTableComponent implements OnInit {

  products: ProductData[] = [
    new ProductData('A00001', 'Arquitectura y arte', 'Art', 29.50),
    new ProductData('H00002', 'Historia de Occidente', 'History', 15.35),
    new ProductData('C00003', 'From Hell', 'Comics', 10),
    new ProductData('L00004', 'Don Quijote de la Mancha', 'Literature', 20.50),
  ];

  header = ['Code', 'Name', 'Category', 'Price'];

  constructor(private uppEventHandlerService: UppEventHandlerService) { }

  ngOnInit(): void {
    this.uppEventHandlerService.sendStartupEvents(300);
    this.initData();
  }

  initData() {
    window.addEventListener('message', (event: UppEvent<ProductData>) => {
        // Check that the type is as expected
        if (event.type == '') {
          this.products.push(event.data);
        }
      }, false);
  }
}
