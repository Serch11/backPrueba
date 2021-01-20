import { Component, OnInit } from '@angular/core';
import { estanteService } from '../estantes/estante.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {

  public listEstantes;
  constructor(
    private estanteService :estanteService
   ,private router:Router
  ) {}

  ngOnInit(): void {
    this.estanteService.getEstantes().subscribe(
      (response)=>{
        if(response){
          // console.log(response);

          this.listEstantes = response.Estantes;
          console.log(this.listEstantes)
        }
      }
    )
  }


  ruta(id:any){
    console.log(id);
    this.router.navigate(['/mostrarEstantes',id])
  }
}
