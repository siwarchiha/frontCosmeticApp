import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCoffretComponent } from './edit-coffret.component';

describe('EditCoffretComponent', () => {
  let component: EditCoffretComponent;
  let fixture: ComponentFixture<EditCoffretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCoffretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCoffretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
