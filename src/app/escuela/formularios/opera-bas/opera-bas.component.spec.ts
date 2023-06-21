import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperaBasComponent } from './opera-bas.component';

describe('OperaBasComponent', () => {
  let component: OperaBasComponent;
  let fixture: ComponentFixture<OperaBasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperaBasComponent]
    });
    fixture = TestBed.createComponent(OperaBasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
