import { ToastMessageService } from './../service/toast-message.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.page.html',
  styleUrls: ['./article-details.page.scss'],
})
export class ArticleDetailsPage implements OnInit {

  private article: any = {};
  private isFavoriate = false;

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

  private async addToFavoriates(article: any) {
    const favoriates = await this.storage.get('favoriates');
    if (favoriates != null) {
      favoriates.push(article);
      this.storage.set('favoriates', favoriates);
    } else {
      this.storage.set('favoriates', [article]);
    }

    this.toastMessageService.presentToast('Added to favoriates');
    this.isFavoriate = true;
  }


  private async removeFromFavoriates(article: any) {
    
    const url = article.url;

    const favoriates = await this.storage.get('favoriates');

    if (favoriates != null) {
      this.storage.set('favoriates' , favoriates.filter(article => article.url !== url));
    }

    this.isFavoriate = false;
  }

}
