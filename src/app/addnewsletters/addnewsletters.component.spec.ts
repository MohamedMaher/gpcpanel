import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewslettersComponent } from './addnewsletters.component';

describe('AddnewslettersComponent', () => {
  let component: AddnewslettersComponent;
  let fixture: ComponentFixture<AddnewslettersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewslettersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewslettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
