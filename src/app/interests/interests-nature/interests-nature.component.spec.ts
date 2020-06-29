import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestsNatureComponent } from './interests-nature.component';

describe('InterestsNatureComponent', () => {
  let component: InterestsNatureComponent;
  let fixture: ComponentFixture<InterestsNatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestsNatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestsNatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
