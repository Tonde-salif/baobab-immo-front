import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmoComponent } from './immo.component';

describe('ImmoComponent', () => {
  let component: ImmoComponent;
  let fixture: ComponentFixture<ImmoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImmoComponent]
    });
    fixture = TestBed.createComponent(ImmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
