import { NewsApiService } from './../service/news-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-publiser-news',
  templateUrl: './publiser-news.page.html',
  styleUrls: ['./publiser-news.page.scss'],
})
export class PubliserNewsPage implements OnInit {

  private name: String;
  private articles: Array<any> = [];
  private isLoading: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private newsApiService: NewsApiService, 
    private router: Router,
    private storage: Storage) { 

    this.activatedRoute.queryParams.subscribe(params => {
      this.name = params.name;
      this.setArticles(params.code);
      this.isLoading = false;
    });
  }
  
  ngOnInit() {

  }

  private setArticles(source: string) {
    this.newsApiService.getHeadlinesBySource(source).subscribe( news => {
      this.articles = news.articles.filter( article => article.urlToImage !== null);
    });
  }

  async viewArticle(article : any) {
    await this.storage.set('article', article);
    this.router.navigate(['/article-details']);
  }

}
