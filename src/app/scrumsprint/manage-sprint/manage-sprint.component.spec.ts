import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSprintComponent } from './manage-sprint.component';

describe('ManageSprintComponent', () => {
  let component: ManageSprintComponent;
  let fixture: ComponentFixture<ManageSprintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageSprintComponent]
    });
    fixture = TestBed.createComponent(ManageSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
