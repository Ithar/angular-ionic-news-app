import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  private API_KEY: string = environment.apiKey;  
  private BASE_URL: string = environment.baseUrl;  
  
  constructor(private http: HttpClient) { }

  getHeadlines(country: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/top-headlines?apikey=${this.API_KEY}&country=${country}&pageSize=2`);
  }
}
