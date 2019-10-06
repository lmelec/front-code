import { Component, OnInit } from '@angular/core';
import { Persona } from './persona';
import { SaludoService } from './saludo.service';


@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  persona: Persona;
  msg: string;
  constructor(private saludoService: SaludoService) { }

  ngOnInit() {
  }

  obtenerSaludo(){
    this.saludoService.saludar().subscribe((res) => {
       this.persona = res;
       this.msg = this.persona.mensaje;
      }
  );

  }
}
