import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EstanteModel } from '../../model/modelEstante';
import { estanteService } from '../estantes/estante.service'
import swal from 'sweetalert';

import { Router } from '@angular/router';
@Component({
  selector: 'app-estantes',
  templateUrl: './estantes.component.html',
  styleUrls: ['./estantes.component.css']
})
export class EstantesComponent implements OnInit {

  @ViewChild('form') form;

  public Estante: EstanteModel;
  constructor(
    private estanteService: estanteService,
    private router: Router
  ) {
    this.Estante = new EstanteModel("", "", "", "");
  }

  ngOnInit(): void {

  }


  guardar(form:NgForm) {

    if (form.valid) {
      console.log(this.Estante)
      this.estanteService.saveEstante(this.Estante).subscribe(
        (estante) => {
          console.log(estante)
          if (estante) {
            console.log(this.form)
            form.reset();
            swal("Good job!", "You clicked the button!", "success").then((value) => {
              setTimeout(() => {
                this.router.navigate(["/listadoEstantes"]);
              }, 1000);

            });

          }
        }
      )
    }
    else {
      console.log(this.form)
      swal("Error", "Complete el formulario correctamente", "error")
    }

  }
}

