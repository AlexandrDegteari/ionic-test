import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { ConturiPage } from './conturi.page';
import { HomePageRoutingModule } from './conturi-routing.module';
import { MessageComponentModule } from '../item/item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageComponentModule,
    HomePageRoutingModule
  ],
  declarations: [ConturiPage]
})
export class HomePageModule {
}
