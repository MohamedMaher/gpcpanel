import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcompanynewsimagesComponent } from './addcompanynewsimages.component';

describe('AddcompanynewsimagesComponent', () => {
  let component: AddcompanynewsimagesComponent;
  let fixture: ComponentFixture<AddcompanynewsimagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcompanynewsimagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcompanynewsimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
