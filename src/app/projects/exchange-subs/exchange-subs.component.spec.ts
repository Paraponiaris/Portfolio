import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeSubsComponent } from './exchange-subs.component';

describe('ExchangeSubsComponent', () => {
  let component: ExchangeSubsComponent;
  let fixture: ComponentFixture<ExchangeSubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExchangeSubsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangeSubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
