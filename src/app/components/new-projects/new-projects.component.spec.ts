import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProjectsComponent } from './new-projects.component';

describe('NewProjectsComponent', () => {
  let component: NewProjectsComponent;
  let fixture: ComponentFixture<NewProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewProjectsComponent]
    });
    fixture = TestBed.createComponent(NewProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
