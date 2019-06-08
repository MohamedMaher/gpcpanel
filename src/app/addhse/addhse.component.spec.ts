import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhseComponent } from './addhse.component';

describe('AddhseComponent', () => {
  let component: AddhseComponent;
  let fixture: ComponentFixture<AddhseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddhseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
