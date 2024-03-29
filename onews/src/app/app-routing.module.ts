import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'article-details',
    loadChildren: () => import('./article-details/article-details.module').then( m => m.ArticleDetailsPageModule)
  },
  {
    path: 'publishers',
    loadChildren: () => import('./publishers/publishers.module').then( m => m.PublishersPageModule)
  },
  {
    path: 'publiser-news',
    loadChildren: () => import('./publiser-news/publiser-news.module').then( m => m.PubliserNewsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
