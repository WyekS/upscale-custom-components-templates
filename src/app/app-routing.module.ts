import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentExternalDataComponent } from './components/component-external-data/component-external-data.component';
import { ComponentFormComponent } from './components/component-form/component-form.component';
import { ComponentTableComponent } from './components/component-table/component-table.component';

const routes: Routes = [
  { path: 'example-table', component: ComponentTableComponent },
  { path: 'example-form', component: ComponentFormComponent },
  { path: 'example-external-data', component: ComponentExternalDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }