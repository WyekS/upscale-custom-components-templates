import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { StoreData } from '../model/store.model';

@Injectable({
  providedIn: 'root',
})
export class ExternalDataService {
  stores: Array<StoreData> = [];
  productsUrl = '/products';
  constructor(private httpSrv: HttpClient) {}

  getData() {
    return [...this.stores];
  }

  getDataAsync(): Promise<StoreData[]> {
    return new Promise((resolve, reject) => {
      const stores = this.stores.map((store: StoreData) => {
        return store;
      });
      resolve(stores);
    });
  }

  removeAsync(index: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        this.stores.splice(index, 1);
        resolve(true);
      } catch (error) {
        reject(false);
      }
    });
  }

  createAsync(store: StoreData): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (store !== null) {
        this.stores.push(store);
        resolve(true);
      } else {
        reject(false);
      }
    });
  }

  updateAsync(store: StoreData): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (store !== null) {
        const index = this.stores.findIndex((element: StoreData) => {
          return element.id === store.id;
        });

        if (index !== -1) {
          console.log('Store found:' + index);
          this.stores[index] = store;
        }
        resolve(true);
      } else {
        console.log('None store found');
        reject(false);
      }
    });
  }

  getStores(): Promise<StoreData[]> {
    //Get mocked data from https://www.w3schools.com/angular/customers.php
    let counterId = 0;
    return this.httpSrv
      .get<StoreData[]>(environment.externalMockDataUrl)
      .pipe(
        map((data: any) => {
          const stores = data['records'].map((record: any) => {
            return new StoreData(
              'ST' + counterId++,
              record['Name'],
              record['City'],
              record['Country']
            );
          });
          return stores;
        })
      )
      .toPromise();
  }

  requestToken() {
    return this.httpSrv.post(
      environment.requestTokenUrl,
      new HttpParams().set('grant_type', 'client_credentials'),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set(
            'Authorization',
            'Basic ' +
              window.btoa('87a4d343a38629fa:42931d16232ca69c287931bd06aeffc0')
          ),
      }
    );
  }

  getProductsInSellingTree(
    sellingTreeId: string,
    accessToken: string,
    language: string
  ) {
    var paramsObj = new HttpParams()
      .set('active', 'true')
      .set('published', 'true')
      .set('pageNumber', '1')
      .set('pageSize', '5')
      .set('fields', 'FULL');
    var headersObj = new HttpHeaders()
      .set('Authorization', 'Bearer ' + accessToken)
      .set('accept', 'application/json')
      .set('Accept-Language', language);
    return this.httpSrv.get(
      environment.productsBySellingTree.replace(
        '${sellingTreeId}',
        sellingTreeId
      ),
      {
        headers: headersObj,
        params: paramsObj,
      }
    );
  }
}
