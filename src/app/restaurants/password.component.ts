import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html'
})

export class PasswordComponent implements OnInit{
  ngOnInit () {}

  save(e){
    e.preventDefault();
    window.Materialize.toast('Salvo com sucesso', 3000, 'rounded')
  }
}
