import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcompanynewsComponent } from './addcompanynews.component';

describe('AddcompanynewsComponent', () => {
  let component: AddcompanynewsComponent;
  let fixture: ComponentFixture<AddcompanynewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcompanynewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcompanynewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
