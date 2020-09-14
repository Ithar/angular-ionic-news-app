import { ToastMessageService } from './../service/toast-message.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { COUNTRIES } from '../constants/countries';
import { CATEGORIES } from './../constants/categories';
import { NewsApiService } from './../service/news-api.service';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  private articles: Array<any> = [];
  private isLoading: boolean = true; 
  private countries: Array<any> = COUNTRIES;
  private selectedCountry = COUNTRIES[4];
  private categories: Array<any> = CATEGORIES; 
  private selectedCategory = CATEGORIES[0];

  constructor(
    private activatedRoute: ActivatedRoute, 
    private newsApi: NewsApiService, 
    private toastMessageService: ToastMessageService, 
    private router: Router,
    private storage: Storage) { }

  ngOnInit() {
    this.getFolder();
    this.loadNews(this.selectedCountry.code, this.selectedCategory.id);     
  }

  private getFolder() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  } 

  private loadNews(country: string, category: string) {

    this.newsApi.getHeadlines(country, category).subscribe( news => {
      this.articles = news.articles.filter( article => article.urlToImage !== null);
      setTimeout(() => this.isLoading = false, 1500);
    }, (e) => {
      console.log(e.message);
      this.toastMessageService.presentToast('An error occured while getting the news');
    });

  }

  private applyFilter() {
    this.isLoading = true;
    this.loadNews(this.selectedCountry.code, this.selectedCategory.id);
  }

  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  async viewArticle(article : any) {
    await this.storage.set('article', article);
    this.router.navigate(['/article-details']);
  }
}
