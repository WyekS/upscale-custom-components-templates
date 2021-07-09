import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentExternalDataComponent } from './components/component-external-data/component-external-data.component';
import { ComponentFooterComponent } from './components/component-footer/component-footer.component';
import { ComponentFormComponent } from './components/component-form/component-form.component';
import { ComponentNavComponent } from './components/component-nav/component-nav.component';
import { ComponentTableComponent } from './components/component-table/component-table.component';
import { SimilarproductpreferencesComponent } from './components/similarproductpreferences/similarproductpreferences.component';

const routes: Routes = [
  { path: '', component: ComponentNavComponent },
  { path: 'example-table', component: ComponentTableComponent },
  { path: 'example-form', component: ComponentFormComponent },
  { path: 'example-external-data', component: ComponentExternalDataComponent },
  { path: 'example-product-preference', component: SimilarproductpreferencesComponent },
  { path: 'footer', component: ComponentFooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }