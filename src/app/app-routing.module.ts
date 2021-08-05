import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExternalDataComponent } from './components/external-data/external-data.component';
import { SimpleFormComponent } from './components/simple-form/simple-form.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { SimilarProductPreferencesComponent } from './components/similar-product-preferences/similar-product-preferences.component';

const routes: Routes = [
  { path: '', component: NavigationMenuComponent },
  { path: 'example-form', component: SimpleFormComponent },
  { path: 'example-external-data', component: ExternalDataComponent },
  { path: 'example-product-preference', component: SimilarProductPreferencesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }