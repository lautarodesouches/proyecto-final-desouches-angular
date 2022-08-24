import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaClaseComponent } from './nueva-clasecomponent';

describe('NuevaClaseComponent', () => {
  let component: NuevaClaseComponent;
  let fixture: ComponentFixture<NuevaClaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaClaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
