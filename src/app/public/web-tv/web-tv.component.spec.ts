import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebTvComponent } from './web-tv.component';

describe('WebTvComponent', () => {
  let component: WebTvComponent;
  let fixture: ComponentFixture<WebTvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebTvComponent]
    });
    fixture = TestBed.createComponent(WebTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
