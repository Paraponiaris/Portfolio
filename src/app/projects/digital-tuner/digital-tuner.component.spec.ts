import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalTunerComponent } from './digital-tuner.component';

describe('DigitalTunerComponent', () => {
  let component: DigitalTunerComponent;
  let fixture: ComponentFixture<DigitalTunerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalTunerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalTunerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
