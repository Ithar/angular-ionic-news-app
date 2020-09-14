import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PubliserNewsPage } from './publiser-news.page';

describe('PubliserNewsPage', () => {
  let component: PubliserNewsPage;
  let fixture: ComponentFixture<PubliserNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubliserNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PubliserNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
