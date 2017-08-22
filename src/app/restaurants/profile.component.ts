import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit{
  ngOnInit () {}

  save(e){
    e.preventDefault();
    window.Materialize.toast('Editado com sucesso', 4000, 'rounded');
  }
}
