import { Component, OnInit } from '@angular/core';
import { ExternalDataService } from './services/external-data.service';
import { LocalStorageService } from '../app/services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom-components-upp';
    static isBrowser: any;

  constructor(
    private externalDataService: ExternalDataService,
    private localStorage: LocalStorageService
    ) {}

  ngOnInit(): void {
    console.log("Main app component started")
      this.externalDataService.requestToken().subscribe(
        (response:any) =>{
          this.localStorage.setItem('AccessToken', response.access_token);
          console.log('access token stored in app init');
        }
      )
  }

}

