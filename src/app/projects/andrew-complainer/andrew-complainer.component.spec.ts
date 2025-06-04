import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndrewComplainerComponent } from './andrew-complainer.component';

describe('AndrewComplainerComponent', () => {
  let component: AndrewComplainerComponent;
  let fixture: ComponentFixture<AndrewComplainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AndrewComplainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AndrewComplainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
