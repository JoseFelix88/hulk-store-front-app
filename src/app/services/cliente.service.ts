import { Injectable } from '@angular/core';
import { Clientes } from '../models/cliente';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from '../global/enpoint';
import { Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private cliente: Clientes;

  LIST_CLIENTES: any[]; /*= [{
    codigoCliente:1,
    numeroIdentificacion: '1102819530',
    nombres: 'Jose Felix',
    apellidos: 'Curiel Gomez',
    telefono: '313 552 5344',
    direccion: 'Calle 17 # 24-71 las colinas',
    correoElectronico: 'josecuriel88@gmail.com'
  },
  {
    codigoCliente:2,
    numeroIdentificacion: '12002991',
    nombres: 'Thaliana',
    apellidos: 'Curiel Vanegas',
    telefono: 'N/A',
    direccion: 'Corregimiento Nueva estrella Tuchin',
    correoElectronico: 'N/A'
  },
  {
    numeroIdentificacion: '50710721',
    nombres: 'Greys Margarita',
    apellidos: 'Vanegas Velasquez',
    telefono: '328 580 9828',
    direccion: 'Corregimiento Nueva estrella Tuchin',
    correoElectronico: 'gresyvanegas@hotmail.com'
  }]*/

  constructor(private httpClient: HttpClient) { }

  getListClientes(): Observable<Clientes[]> {
    return this.httpClient.get<GetResponse>(Endpoints.CLIENTES_ALL)
    .pipe(
      map(response => response._embedded.clientes)
    );
  }

  savedClient(cliente: Clientes): Observable<any> {
    if(cliente.codigoCliente != null) {
      return this.httpClient.put(Endpoints.CLIENTES_ALL + cliente.codigoCliente, cliente)
            .pipe(
                tap(result => console.log('Cliente modificado: ' + result))
            );
    } else {
      return this.httpClient.post(Endpoints.CLIENTES_ALL, cliente).pipe(
          tap(result => console.log('Nuevo cliente registrado: ' + result))
        );
    }
  }

  newCliente(): Clientes {
    return {
      codigoCliente: null,
      numeroIdentificacion: '',
      nombres: '',
      apellidos: '',
      telefono: '',
      direccion: '',
      correoElectronico: ''
    };
  }

  public getCliente(){return this.cliente}

  public setCliente(cliente: Clientes): void { this.cliente = cliente; }

}

export interface GetResponse {
  _embedded: {
    clientes: Clientes[];
    _link: {self: {href: string}};
  }
}
