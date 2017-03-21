import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PItalicsComponent } from './p-italics.component';

describe('PItalicsComponent', () => {
  let component: PItalicsComponent;
  let fixture: ComponentFixture<PItalicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PItalicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PItalicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
