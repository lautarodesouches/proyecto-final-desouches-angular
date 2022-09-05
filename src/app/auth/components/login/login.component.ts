import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup = new FormGroup({
    usuario: new FormControl('test', [Validators.required]),
    contrasenia: new FormControl('12345', [Validators.required])
  })

  constructor(
    private auth: AuthService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
  }

  login() {
    const usuario: Usuario = {
      id: '',
      usuario: this.formulario.value.usuario,
      contrasenia: this.formulario.value.contrasenia,
      admin: this.formulario.value.usuario,
      email: '',
    }

    this.auth.iniciarSesion(usuario)

    this.router.navigate(['alumnos'])
  }

}