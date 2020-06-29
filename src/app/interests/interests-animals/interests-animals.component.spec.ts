import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestsAnimalsComponent } from './interests-animals.component';

describe('InterestsAnimalsComponent', () => {
  let component: InterestsAnimalsComponent;
  let fixture: ComponentFixture<InterestsAnimalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestsAnimalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestsAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
