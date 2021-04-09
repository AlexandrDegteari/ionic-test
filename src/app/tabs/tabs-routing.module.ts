import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'conturi',
        loadChildren: () => import('../conturi/conturi.module').then(m => m.HomePageModule)
      },
      {
        path: 'documents',
        loadChildren: () => import('../documente/documente.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'filiale',
        loadChildren: () => import('../filiale/filiale.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'curs',
        loadChildren: () => import('../curs/curs.module').then(m => m.Tab4PageModule)
      },
      {
        path: '',
        redirectTo: '/conturi',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/conturi',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
