/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppraiseeComponent } from './appraisee.component';

describe('AppraiseeComponent', () => {
  let component: AppraiseeComponent;
  let fixture: ComponentFixture<AppraiseeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppraiseeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppraiseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
