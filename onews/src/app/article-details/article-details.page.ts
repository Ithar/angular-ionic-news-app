import { ToastMessageService } from './../service/toast-message.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.page.html',
  styleUrls: ['./article-details.page.scss'],
})
export class ArticleDetailsPage implements OnInit {

  article: any = {};
  isFavorite = false;

  constructor(private storage: Storage, private toastMessageService: ToastMessageService) { }

  ngOnInit() {
    this.getArticle();
  }

  async getArticle() {
    const article = await this.storage.get('article');
    if (article !== null) {
      this.article = article;
    } 
  }

   async addToFavorites(article: any) {
    const favoriates = await this.storage.get('favorites');
    if (favoriates != null) {
      favoriates.push(article);
      this.storage.set('favorites', favoriates);
    } else {
      this.storage.set('favorites', [article]);
    }

    this.toastMessageService.presentToast('Added to favorites');
    this.isFavorite = true;
  }

  public async removeFromFavorites(article: any) {
    
    const url = article.url;

    const favorites = await this.storage.get('favorites');

    if (favorites !== null) {
      this.storage.set('favorites' , favorites.filter(article => article.url !== url));
    }

    this.isFavorite = false;
  }

}
