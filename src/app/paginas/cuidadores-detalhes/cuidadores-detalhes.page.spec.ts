import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuidadoresDetalhesPage } from './cuidadores-detalhes.page';

describe('CuidadoresDetalhesPage', () => {
  let component: CuidadoresDetalhesPage;
  let fixture: ComponentFixture<CuidadoresDetalhesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CuidadoresDetalhesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
