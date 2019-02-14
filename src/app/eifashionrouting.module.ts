import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EifashionlandingComponent } from './eifashionlanding/eifashionlanding.component';
import { EifashionproductsComponent } from './eifashionproducts/eifashionproducts.component';
import { EibillingComponent } from './eibilling/eibilling.component';

const routes: Routes = [
  { path:  '', redirectTo:  'eifashionlanding', pathMatch:  'full' },
  {
      path:  'eifashionlanding',
      component:  EifashionlandingComponent
  },
  {
    path:  'products',
    component:  EifashionproductsComponent
  },
  {
    path:  'billing',
    component:  EibillingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class EifashionroutingModule { }
