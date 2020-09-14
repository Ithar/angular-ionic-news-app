import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.page.html',
  styleUrls: ['./article-details.page.scss'],
})
export class ArticleDetailsPage implements OnInit {

  article: any = {};

  constructor(private storage: Storage) { }

  ngOnInit() {
    this.getArticle();
  }

  async getArticle() {
    const article = await this.storage.get('article');
    if (article !== null) {
      this.article = article;
    } 
  }
}
