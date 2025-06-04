import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodepulseComponent } from './codepulse.component';

describe('CodepulseComponent', () => {
  let component: CodepulseComponent;
  let fixture: ComponentFixture<CodepulseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodepulseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodepulseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
