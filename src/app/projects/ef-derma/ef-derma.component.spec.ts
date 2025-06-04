import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfDermaComponent } from './ef-derma.component';

describe('EfDermaComponent', () => {
  let component: EfDermaComponent;
  let fixture: ComponentFixture<EfDermaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EfDermaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EfDermaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
