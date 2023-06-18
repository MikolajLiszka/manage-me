import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnCreateNewProjComponent } from './btn-create-new-proj.component';

describe('BtnCreateNewProjComponent', () => {
  let component: BtnCreateNewProjComponent;
  let fixture: ComponentFixture<BtnCreateNewProjComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnCreateNewProjComponent]
    });
    fixture = TestBed.createComponent(BtnCreateNewProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
