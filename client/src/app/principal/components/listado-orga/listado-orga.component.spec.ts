import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoOrgaComponent } from "./listado-orga.component";

describe('ListadoOrgaComponent', () => {
  let component: ListadoOrgaComponent;
  let fixture: ComponentFixture<ListadoOrgaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoOrgaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoOrgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
