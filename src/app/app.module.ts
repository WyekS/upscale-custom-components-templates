import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentFormComponent } from './components/component-form/component-form.component';
import { ComponentTableComponent } from './components/component-table/component-table.component';
import { FormsModule } from '@angular/forms';
import { ComponentExternalDataComponent } from './components/component-external-data/component-external-data.component';
import { ComponentExternalDataAuxComponent } from './components/component-external-data-aux/component-external-data-aux.component';
import { UppEventHandlerService } from './uppcomm/upp-event-handler.service';
import { ExternalDataService } from './services/external-data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ComponentTableComponent,
    ComponentFormComponent,
    ComponentExternalDataComponent,
    ComponentExternalDataAuxComponent
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
