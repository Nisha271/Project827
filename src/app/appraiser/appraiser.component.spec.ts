/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppraiserComponent } from './appraiser.component';

describe('AppraiserComponent', () => {
  let component: AppraiserComponent;
  let fixture: ComponentFixture<AppraiserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppraiserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppraiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
