import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestsGardeningComponent } from './interests-gardening.component';

describe('InterestsGardeningComponent', () => {
  let component: InterestsGardeningComponent;
  let fixture: ComponentFixture<InterestsGardeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestsGardeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestsGardeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
