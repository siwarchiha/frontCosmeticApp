import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoffretComponent } from './add-coffret.component';

describe('AddCoffretComponent', () => {
  let component: AddCoffretComponent;
  let fixture: ComponentFixture<AddCoffretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCoffretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCoffretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
