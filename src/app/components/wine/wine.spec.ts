import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wine } from './wine';

describe('Wine', () => {
  let component: Wine;
  let fixture: ComponentFixture<Wine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wine],
    }).compileComponents();

    fixture = TestBed.createComponent(Wine);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
