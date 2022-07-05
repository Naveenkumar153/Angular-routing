import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorCompnentComponent } from './error-compnent.component';

describe('ErrorCompnentComponent', () => {
  let component: ErrorCompnentComponent;
  let fixture: ComponentFixture<ErrorCompnentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorCompnentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorCompnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
