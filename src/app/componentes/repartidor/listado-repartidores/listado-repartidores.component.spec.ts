import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoRepartidoresComponent } from './listado-repartidores.component';

describe('ListadoRepartidoresComponent', () => {
  let component: ListadoRepartidoresComponent;
  let fixture: ComponentFixture<ListadoRepartidoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListadoRepartidoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListadoRepartidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
