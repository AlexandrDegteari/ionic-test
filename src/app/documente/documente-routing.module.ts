import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentePage } from './documente.page';

const routes: Routes = [
  {
    path: '',
    component: DocumentePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
