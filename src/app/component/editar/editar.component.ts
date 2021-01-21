import { Component, OnInit } from '@angular/core';
import { estanteService } from '../estantes/estante.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import swal from 'sweetalert'
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {

  public listEstantes;
  constructor(
    private estanteService: estanteService
    , private router: Router
  ) { }

  ngOnInit(): void {
    this.estanteService.getEstantes().subscribe(
      (response) => {
        if (response) {
          // console.log(response);

          this.listEstantes = response.Estantes;
          console.log(this.listEstantes)
        }
      }
    )
  }


  ruta(id: any) {
    console.log(id);
    this.router.navigate(['/mostrarEstantes', id])
  }
  eliminar(id: string,e:any) {
  console.log(e.path[3])
  if(e.path){
    var card : any = e.path[3];
    console.log(card)
  }

    swal({
      title: "Estas seguro?",
      text: "Estas seguro de eliminar esta Estante ?!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          this.estanteService.deleteEstante(id).subscribe(
            (res) => {
              if (res) {
                console.log(res)
                card.classList.add("hidden");
                swal("El estante fue eliminado extitosamente!", {
                  icon: "success",
                });
              }
            }
          )
        } else {
          swal("Operacion cancelada!");
        }
      });
  }
}
