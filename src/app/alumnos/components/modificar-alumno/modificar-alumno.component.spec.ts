import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { AlumnoService } from '../../services/alumno.service'

import { ModificarAlumnoComponent } from './modificar-alumno.component'

describe('ModificarAlumnoComponent', () => {

  let component: ModificarAlumnoComponent
  let fixture: ComponentFixture<ModificarAlumnoComponent>

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MatDialogModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        AlumnoService
      ],
      declarations: [ModificarAlumnoComponent],

    }).compileComponents()

    fixture = TestBed.createComponent(ModificarAlumnoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()

  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

})