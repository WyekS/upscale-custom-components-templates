import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { SimpleFormComponent } from './components/simple-form/simple-form.component';
import { ExternalDataComponent } from './components/external-data/external-data.component';
import { ExternalDataAuxComponent } from './components/external-data-aux/external-data-aux.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';

// Services
import { UppEventHandlerService } from './uppcomm/upp-event-handler.service';
import { ExternalDataService } from './services/external-data.service';
import { SimilarProductPreferencesComponent } from './components/similar-product-preferences/similar-product-preferences.component';



@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    ExternalDataComponent,
    ExternalDataAuxComponent,
    NavigationMenuComponent,
    SimilarProductPreferencesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ 
    UppEventHandlerService,
    ExternalDataService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
