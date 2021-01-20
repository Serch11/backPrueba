import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EstanteModel } from '../../model/modelEstante';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class estanteService {
  public url = 'http://localhost:5000/';
  constructor(private httpcliente: HttpClient) {}

  saveEstante(params: EstanteModel): Observable<any> {
    let header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpcliente.post(this.url + 'saveEstantes', params, {
      headers: header,
    });
  }

  getEstantes(): Observable<any> {
    return this.httpcliente.get(this.url + 'getEstantes');
  }

  getOneService(id: any): Observable<any> {
    let header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpcliente.get(this.url + 'getOneEstante/' + id, {
      headers: header,
    });
  }
}
