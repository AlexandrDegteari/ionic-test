import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewItemPage } from './view-item.page';

import { IonicModule } from '@ionic/angular';

import { ViewMessagePageRoutingModule } from './view-item-routing.module';
import {MessageComponentModule} from '../item/item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMessagePageRoutingModule,
    MessageComponentModule
  ],
  declarations: [ViewItemPage]
})
export class ViewMessagePageModule {}
