import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { PUBLISHERS } from '../constants/publishers';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.page.html',
  styleUrls: ['./publishers.page.scss'],
})
export class PublishersPage implements OnInit {

  private publishers: Array<any> = PUBLISHERS;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getPublisherNews(publisher: any) {
    const extras: NavigationExtras = {
      queryParams: {
        name: publisher.name,
        code: publisher.code
      }
    }

    this.router.navigate(['/publiser-news'], extras);
  }
}
