import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AlumnosComponent } from './alumnos.component'
import { AlumnoService } from './services/alumno.service'
import { RouterTestingModule } from '@angular/router/testing'
import { MatInputModule } from '@angular/material/input'
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button'
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

describe('AlumnosComponent', () => {

  let component: AlumnosComponent
  let fixture: ComponentFixture<AlumnosComponent>

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [
        BrowserAnimationsModule,
        MatInputModule,
        MatDialogModule,
        MatButtonModule,
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AlumnosComponent
      ],
      providers: [
        {
          provide: MatDialog, value: {}
        },
        {
          provide: MAT_DIALOG_DATA, useValue: {}
        },
        AlumnoService
      ]

    }).compileComponents();

    fixture = TestBed.createComponent(AlumnosComponent)
    component = fixture.componentInstance
    fixture.detectChanges()

  });

  it('should create', () => {
    expect(component).toBeTruthy()
  })

})