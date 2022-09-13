import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';

describe('LoginComponent', () => {

  let httpClientSpy: { get: jasmine.Spy }
  let service: AuthService;
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router
  let store: Store<AppState>

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatDialogModule,
        MatButtonModule,
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        LoginComponent
      ],
      providers: [
        {
          provide: MatDialog, value: {}
        },
        {
          provide: MAT_DIALOG_DATA, useValue: {}
        },
        AuthService
      ]

    }).compileComponents();

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    service = new AuthService(httpClientSpy as any, router, store)

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('Crea el componente', () => {
    expect(component).toBeTruthy();
  });

  it('El formulario es invalido si ambos campos estan vacios', () => {
    const formulario = component.formulario
    const usuario = formulario.controls['usuario']
    const contrasenia = formulario.controls['contrasenia']

    usuario.setValue('')
    contrasenia.setValue('')

    expect(formulario.invalid).toBeTruthy();
  });

  it('El formulario es invalido si el usuario se encuentra vacio', () => {
    const formulario = component.formulario
    const usuario = formulario.controls['usuario']

    usuario.setValue('')

    expect(formulario.invalid).toBeTruthy();
  });

  it('El formulario es invalido si la contraseña se encuentra vacia', () => {
    const formulario = component.formulario
    const contrasenia = formulario.controls['contrasenia']

    contrasenia.setValue('')

    expect(formulario.invalid).toBeTruthy();
  });

  /* it('Loggear con credenciales validas', (done: DoneFn) => {

    const formulario = component.formulario
    const usuario = formulario.controls['usuario']
    const contrasenia = formulario.controls['contrasenia']

    usuario.setValue('test')
    contrasenia.setValue('12345')

    const mockDatos = [
      {
        "usuario": "test",
        "admin": true,
        "contrasenia": "12345",
        "email": "test@gmail.com",
        "id": "1"
      },
      {
        "usuario": "tost",
        "admin": false,
        "contrasenia": "6789",
        "email": "Lewis88@hotmail.com",
        "id": "2"
      }
    ]

    httpClientSpy.get.and.returnValue(of(mockDatos))

    component.login()

    service.obtenerSesion().subscribe(e => {
      expect(e.sesionActiva).toBeTruthy();
      done()
    })

  }); */

});