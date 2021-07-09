import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { ComponentFormComponent } from './components/component-form/component-form.component';
import { ComponentTableComponent } from './components/component-table/component-table.component';
import { ComponentExternalDataComponent } from './components/component-external-data/component-external-data.component';
import { ComponentExternalDataAuxComponent } from './components/component-external-data-aux/component-external-data-aux.component';
import { ComponentNavComponent } from './components/component-nav/component-nav.component';

// Services
import { UppEventHandlerService } from './uppcomm/upp-event-handler.service';
import { ExternalDataService } from './services/external-data.service';
import { SimilarproductpreferencesComponent } from './components/similarproductpreferences/similarproductpreferences.component';
import { ComponentFooterComponent } from './components/component-footer/component-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentTableComponent,
    ComponentFormComponent,
    ComponentExternalDataComponent,
    ComponentExternalDataAuxComponent,
    ComponentNavComponent,
    SimilarproductpreferencesComponent,
    ComponentFooterComponent
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
