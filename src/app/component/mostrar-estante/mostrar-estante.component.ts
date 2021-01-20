import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { estanteService } from '../estantes/estante.service';
@Component({
  selector: 'app-mostrar-estante',
  templateUrl: './mostrar-estante.component.html',
  styleUrls: ['./mostrar-estante.component.css'],
})
export class MostrarEstanteComponent implements OnInit {
  public id: any;
  public listOneEstate;
  public ArrayEstante: Array<any> = new Array([],[]);

  arrayPrueba : [[5],[5]];
  constructor(
    private activateRouter: ActivatedRoute,
    private serviceEstantes: estanteService
  ) {}

  ngOnInit(): void {
    this.id = this.activateRouter.snapshot.params.id;
    console.log(this.id);

    this.serviceEstantes.getOneService(this.id).subscribe((response) => {
      if (response) {
        this.listOneEstate = response.Estante;
        let filas = this.listOneEstate.filas;
        let columnas = this.listOneEstate.columnas;

        console.log(filas,columnas)
        console.log(this.ArrayEstante[0])
       for (let i = 0; i < filas.length; i++) {
         console.log(i)
        this.ArrayEstante[0].push(i);
       }
        console.log(this.ArrayEstante)
      }
    });
  }
}
