import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import { AuthService } from 'src/app/core/services/auth.service'
import { Usuario } from 'src/app/models/usuario'
import { AppState } from '../../../state/app.state'
import { selectorObtenerSesion } from '../../../state/selectors/auth.selector'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  error: string = ''
  loading: boolean = false

  formulario: FormGroup = new FormGroup({
    usuario: new FormControl('test', [Validators.required]),
    contrasenia: new FormControl('12345', [Validators.required])
  })

  constructor(

    private auth: AuthService,
    private store: Store<AppState>

  ) {

    this.store.select(selectorObtenerSesion).subscribe(e => {
      this.error = e.error || ''
      this.loading = e.loading
    })
    
  }

  ngOnInit(): void {
  }

  login() {

    const usuario: Usuario = {
      id: '',
      usuario: this.formulario.value.usuario,
      contrasenia: this.formulario.value.contrasenia,
      admin: false,
      email: '',
    }

    this.auth.iniciarSesion(usuario)

  }

}