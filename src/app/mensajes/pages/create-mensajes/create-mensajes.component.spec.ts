import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMensajesComponent } from './create-mensajes.component';

describe('CreateMensajesComponent', () => {
  let component: CreateMensajesComponent;
  let fixture: ComponentFixture<CreateMensajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMensajesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
