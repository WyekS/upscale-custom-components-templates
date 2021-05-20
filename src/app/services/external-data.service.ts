
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { StoreData } from '../model/store.model';

@Injectable({
  providedIn: 'root'
})
export class ExternalDataService {

  stores: Array<StoreData> = [];

  constructor(private httpSrv: HttpClient) { }

  getData() {
    return [...this.stores];
  }

  getDataAsync(): Promise<StoreData[]> {
    return new Promise((resolve, reject) => {
      const stores = this.stores.map((store: StoreData) => { return store });
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
    return this.httpSrv.get<StoreData[]>(environment.externalMockDataUrl)
      .pipe(map((data: any) => {
        const stores = data['records'].map((record: any) => {
          return new StoreData('ST' + counterId++, record['Name'], record['City'], record['Country']);
        });
        return stores;
      })).toPromise();
  }

}