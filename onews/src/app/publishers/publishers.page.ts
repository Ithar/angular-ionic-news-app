import { Component, OnInit } from '@angular/core';

import { PUBLISHERS } from '../constants/publishers';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.page.html',
  styleUrls: ['./publishers.page.scss'],
})
export class PublishersPage implements OnInit {

  private publishers: Array<any> = PUBLISHERS;

  constructor() { }

  ngOnInit() {
  }

}
