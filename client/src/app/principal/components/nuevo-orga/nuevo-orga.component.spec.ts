import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoOrgaComponent } from './nuevo-orga.component';

describe('NuevoOrgaComponent', () => {
  let component: NuevoOrgaComponent;
  let fixture: ComponentFixture<NuevoOrgaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoOrgaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoOrgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
