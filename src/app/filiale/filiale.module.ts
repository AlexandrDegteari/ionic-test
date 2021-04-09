import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilialePage } from './filiale.page';
import { Tab3PageRoutingModule } from './filiale-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: FilialePage }]),
    Tab3PageRoutingModule,
  ],
  declarations: [FilialePage]
})
export class Tab3PageModule {}
