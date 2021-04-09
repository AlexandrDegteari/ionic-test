import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConturiPage } from './conturi.page';

const routes: Routes = [
  {
    path: '',
    component: ConturiPage
  },
  {
    path: ':id',
    loadChildren: () => import('../view-item/view-item.module').then(m => m.ViewMessagePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
