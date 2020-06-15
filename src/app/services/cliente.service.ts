import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from '../global/enpoint';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private cliente: Cliente;

  constructor(private httpClient: HttpClient) { }

  getListClientes(): Observable<Cliente[]> {
    return this.httpClient.get<GetResponseClient>(Endpoints.ENDPOINT_CUSTOMER)
    .pipe(
      map(response => response._embedded.clientes)
    );
  }

  savedClient(cliente: Cliente): Observable<any> {
    if(cliente.codigoCliente != null) {
      return this.httpClient.put(Endpoints.ENDPOINT_CUSTOMER + cliente.codigoCliente, cliente)
            .pipe(
                tap(result => console.log('Cliente modificado: ' + result))
            );
    } else {
      return this.httpClient.post(Endpoints.ENDPOINT_CUSTOMER, cliente).pipe(
          tap(result => console.log('Nuevo cliente registrado: ' + result))
        );
    }
  }

  getLatestBalancePurchaseCustomer(codigoCliente: number): Observable<any> {
  return  this.httpClient.get(Endpoints.ENDPOINT_CUSTOMER
                        + Endpoints.CLIENT_REPORT_BALANCE_LAST_SHOPPING + codigoCliente)
  }

  public printDataBasicCustomer(codigoCliente: number){

    return this.httpClient.get(Endpoints.ENDPOINT_CUSTOMER + Endpoints.CLIENT_REPORT_PRINT_BASIC_DATA + codigoCliente,
        {responseType: 'blob'});
}


  newCliente(): Cliente {
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

  public getCliente(){ return this.cliente }

  public setCliente(cliente: Cliente): void { this.cliente = cliente; }

}

export interface GetResponseClient {
  _embedded: {
    clientes: Cliente[];
    _link: {self: {href: string}};
  }
}

export interface ReporteDetalleComprasClienteProxies {
  codigoVenta: number;
  fechaVenta: Date;
  descripcionProducto: string;
  cantidadComprada: number;
  valorUnidad: number;
  valorTotal: number;
}

export interface GetResponseReporteCompras {
  _embedded: {
    ReporteDetalleComprasClienteProxies: ReporteDetalleComprasClienteProxies[];
    _link: {self: {href: string}};
  }
}
