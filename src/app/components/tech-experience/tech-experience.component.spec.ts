import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechExperienceComponent } from './tech-experience.component';

describe('TechExperienceComponent', () => {
  let component: TechExperienceComponent;
  let fixture: ComponentFixture<TechExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechExperienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
