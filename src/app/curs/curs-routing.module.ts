import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursPage } from './curs.page';

const routes: Routes = [
  {
    path: '',
    component: CursPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab4PageRoutingModule {}
