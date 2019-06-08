import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectornewsComponent } from './sectornews.component';

describe('SectornewsComponent', () => {
  let component: SectornewsComponent;
  let fixture: ComponentFixture<SectornewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectornewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectornewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
