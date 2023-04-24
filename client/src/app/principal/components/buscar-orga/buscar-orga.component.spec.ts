import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarOrgaComponent } from './buscar-orga.component';

describe('BuscarOrgaComponent', () => {
  let component: BuscarOrgaComponent;
  let fixture: ComponentFixture<BuscarOrgaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarOrgaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarOrgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
