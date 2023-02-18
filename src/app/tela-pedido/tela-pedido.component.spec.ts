import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaPedidoComponent } from './tela-pedido.component';

describe('TelaPedidoComponent', () => {
  let component: TelaPedidoComponent;
  let fixture: ComponentFixture<TelaPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaPedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
