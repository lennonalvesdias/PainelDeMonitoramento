import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public _form: FormGroup;
  private _erro = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this._form = this._formBuilder.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required]
    })
  }

  onSubmit() {
    this._authService.entrar(this._form.value);
  }

}
