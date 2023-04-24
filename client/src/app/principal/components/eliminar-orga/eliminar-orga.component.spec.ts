import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarOrgaComponent } from './eliminar-orga.component';

describe('EliminarOrgaComponent', () => {
  let component: EliminarOrgaComponent;
  let fixture: ComponentFixture<EliminarOrgaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarOrgaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarOrgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
