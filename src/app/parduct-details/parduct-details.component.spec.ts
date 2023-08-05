import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParductDetailsComponent } from './parduct-details.component';

describe('ParductDetailsComponent', () => {
  let component: ParductDetailsComponent;
  let fixture: ComponentFixture<ParductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParductDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
