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

  getHeadlines(country: string, category: string): Observable<any> {

    let countryPram  = this.getCountryPram(country);
    let categoryPram  = this.getCategoryPram(category);

    return this.http.get(`${this.BASE_URL}/top-headlines?apikey=${this.API_KEY}${countryPram}${categoryPram}&pageSize=10`);
  }

  private getCountryPram(country: string) {
    
    if (country === '-') {
      country = 'gb';
    }

    return '&country='+country;
  }

  private getCategoryPram(category: string) {
    
    if (category === '') {
      return '';
    }

    return '&category='+category;
  }

  
}
