import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AlumnoService } from './alumno.service';
import { of } from 'rxjs';

describe('AlumnoService', () => {

  let httpClientSpy: { get: jasmine.Spy }
  let service: AlumnoService;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AlumnoService]
    }).compileComponents();

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    service = new AlumnoService(httpClientSpy as any)
    
  });

  it('Crear servicio', () => {
    expect(service).toBeTruthy();
  });

  it('Retornar lista alumnos', (done: DoneFn) => {

    const mockDatos = [
      {
        "nombre": "Melyna",
        "apellido": "Bogan",
        "email": "Melyna_Bogan@gmail.com",
        "telefono": "1-550-424-7581 x76478",
        "dni": 56463,
        "pais": "RE",
        "activo": false,
        "id": "22"
      },
      {
        "nombre": "Jennie",
        "apellido": "VonRueden",
        "email": "Jennie.VonRueden45@gmail.com",
        "telefono": "804.549.7432",
        "dni": 56312,
        "pais": "AR",
        "activo": true,
        "id": "23"
      },
      {
        "nombre": "Earl",
        "apellido": "Morissette",
        "email": "Davin92@hotmail.com",
        "telefono": "1-968-955-8337 x0867",
        "dni": 93748,
        "pais": "SG",
        "activo": true,
        "id": "24"
      }
    ]

    httpClientSpy.get.and.returnValue(of(mockDatos))

    service.obtenerAlumnos().subscribe(alumnos => {
      expect(alumnos).toEqual(mockDatos)
      done()
    })

  });

});