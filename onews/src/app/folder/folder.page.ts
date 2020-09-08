import { NewsApiService } from './../service/news-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  news: Array<any> = [];
  isLoading: boolean = true; 

  constructor(private activatedRoute: ActivatedRoute, private newsApi: NewsApiService) { }

  ngOnInit() {
    
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');

    this.loadNews();
     
  }

  private loadNews() {

    this.newsApi.getHeadlines('us').subscribe( news => {
      this.isLoading = false;
      this.news = news.articles.filter( article => article.urlToImage !== null);
    }, (e) => {
      console.log('Failed to get news');
    });

  }

}
