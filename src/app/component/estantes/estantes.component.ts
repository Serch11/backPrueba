import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EstanteModel } from '../../model/modelEstante';
import { estanteService } from '../estantes/estante.service'
import swal from 'sweetalert';

import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
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
    private router: Router,
    private flassMenssage:FlashMessagesService
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
        },
        (error)=>{
          console.log(error)
          if(error){
            swal({
              text:"Las filas y columnas deben ser datos numericos",
              icon:"warning"
            })
          }
        }
      )
    }
    else {
      console.log(this.form)
      this.flassMenssage.show("El formulario debe estar llenado correctamente",{
        cssClass:"alert-danger", timeout:4000}
      )
    }

  }
}

