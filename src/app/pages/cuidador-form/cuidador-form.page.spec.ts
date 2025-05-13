import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuidadorFormPage } from './cuidador-form.page';

describe('CuidadorFormPage', () => {
  let component: CuidadorFormPage;
  let fixture: ComponentFixture<CuidadorFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CuidadorFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
