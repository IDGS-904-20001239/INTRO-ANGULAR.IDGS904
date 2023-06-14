import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro-angular-idgs904';

  duplicaValor(valor:number):number{
    return valor*2;
  }

  Alumnos={
    matricula:1234,
    nombre:'Yair',
    fechaNacimiento:new Date(),
    pagoIns:2759.23
  };
}
