import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsectornewsComponent } from './addsectornews.component';

describe('AddsectornewsComponent', () => {
  let component: AddsectornewsComponent;
  let fixture: ComponentFixture<AddsectornewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsectornewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsectornewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
