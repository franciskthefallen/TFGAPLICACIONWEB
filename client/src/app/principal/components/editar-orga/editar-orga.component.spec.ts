import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarOrgaComponent } from './editar-orga.component';

describe('EditarOrgaComponent', () => {
  let component: EditarOrgaComponent;
  let fixture: ComponentFixture<EditarOrgaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarOrgaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarOrgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
