import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PubliserNewsPageRoutingModule } from './publiser-news-routing.module';

import { PubliserNewsPage } from './publiser-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PubliserNewsPageRoutingModule
  ],
  declarations: [PubliserNewsPage]
})
export class PubliserNewsPageModule {}
