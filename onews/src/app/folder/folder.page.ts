import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { COUNTRIES } from '../constants/countries';
import { CATEGORIES } from './../constants/categories';
import { NewsApiService } from './../service/news-api.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  private news: Array<any> = [];
  private isLoading: boolean = true; 
  private countries: Array<any> = COUNTRIES;
  private selectedCountry = COUNTRIES[4];
  private categories: Array<any> = CATEGORIES; 
  private selectedCategory = CATEGORIES[0];

  constructor(private activatedRoute: ActivatedRoute, private newsApi: NewsApiService) { }

  ngOnInit() {
    this.getFolder();
    this.loadNews(this.selectedCountry.code, this.selectedCategory.id);     
  }

  private getFolder() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  } 

  private loadNews(country: string, category: string) {

    this.newsApi.getHeadlines(country, category).subscribe( news => {
      this.news = news.articles.filter( article => article.urlToImage !== null);
      setTimeout(() => this.isLoading = false, 1500);
    }, (e) => {
      console.log('Failed to get news');
    });

  }

  private countryChange() {

  }

}
