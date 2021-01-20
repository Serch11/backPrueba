import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {EstanteModel} from '../../model/modelEstante';
import {estanteService} from '../estantes/estante.service'

import { Router } from '@angular/router';
@Component({
  selector: 'app-estantes',
  templateUrl: './estantes.component.html',
  styleUrls: ['./estantes.component.css']
})
export class EstantesComponent implements OnInit {


  public Estante : EstanteModel;
  constructor(
    private estanteService :estanteService,
    private router:Router
  ) {
    this.Estante = new EstanteModel("","","","");
  }

  ngOnInit(): void {
  }


   guardar({value,valid}:{value:NgForm,valid:boolean}){

    if(valid){
      console.log(this.Estante)
      this.estanteService.saveEstante(this.Estante).subscribe(
        (estante) =>{
            console.log(estante)
            if(estante){
             alert("usuarios creado con exito");
              setTimeout(() => {
                  this.router.navigate(["/listadoEstantes"]);
              }, 2000);
            }
        }
      )
   }
    else{
     alert("Llene el formulario correctamente")
    }

  }}

