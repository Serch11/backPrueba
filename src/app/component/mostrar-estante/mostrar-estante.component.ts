import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { estanteService } from '../estantes/estante.service';
import swal from 'sweetalert'
@Component({
  selector: 'app-mostrar-estante',
  templateUrl: './mostrar-estante.component.html',
  styleUrls: ['./mostrar-estante.component.css'],
})
export class MostrarEstanteComponent implements OnInit {
  public id: any;
  public listOneEstate;
  public ArrayEstante: Array<any> = new Array();

  arrayPrueba: [[5], [5]];
  visivilidad : boolean = false;
  constructor(
    private activateRouter: ActivatedRoute,
    private serviceEstantes: estanteService
  ) { }

  ngOnInit(): void {
    this.id = this.activateRouter.snapshot.params.id;
    console.log(this.id);

    this.serviceEstantes.getOneService(this.id).subscribe((response) => {
      if (response) {

        this.listOneEstate = response.Estante;
        let filas = this.listOneEstate.filas;
        let columnas = this.listOneEstate.columnas;
        var res = filas * columnas;
        console.log(filas, columnas)
        console.log(res)
        var matriz = new Array()
        for (let i = 0; i < res; i++) {
          matriz.push(`posicion${i}`);
        }
        //console.log(matriz)
        this.ArrayEstante = matriz;
        console.log(this.ArrayEstante)
      }

    });
  }

  evento(e: any) {
    console.log(e);
      if(e.path){
        var box = e.path[0]
        var value = box.textContent;
        console.log(box,value)
      }
    swal({
      title: "El objecto puede salir de Estante",
      text: "Si desea sacarlo presione Ok",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((del) => {
        console.log(del)
        if(del){
            box.classList.add("hidden");
            this.visivilidad = del
            this.ArrayEstante.splice(value,1);
            console.log(this.ArrayEstante)
        }else{
          swal({
            text:"Es una buena Eleccion",
            icon:"success"
          });
        }
    })

  }
}
