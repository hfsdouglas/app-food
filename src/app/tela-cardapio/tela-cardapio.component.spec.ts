import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCardapioComponent } from './tela-cardapio.component';

describe('TelaCardapioComponent', () => {
  let component: TelaCardapioComponent;
  let fixture: ComponentFixture<TelaCardapioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaCardapioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaCardapioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
