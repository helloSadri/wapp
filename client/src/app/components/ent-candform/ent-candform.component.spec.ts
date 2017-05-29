/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EntCandformComponent } from './ent-candform.component';

describe('EntCandformComponent', () => {
  let component: EntCandformComponent;
  let fixture: ComponentFixture<EntCandformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntCandformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntCandformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
