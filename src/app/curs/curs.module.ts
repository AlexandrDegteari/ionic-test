import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CursPage } from './curs.page';

import { Tab4PageRoutingModule } from './curs-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: CursPage }]),
    Tab4PageRoutingModule,
  ],
  declarations: [CursPage]
})
export class Tab4PageModule {}
