import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PubliserNewsPage } from './publiser-news.page';

const routes: Routes = [
  {
    path: '',
    component: PubliserNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PubliserNewsPageRoutingModule {}
