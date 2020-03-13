import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private cliente: Cliente;

  LIST_CLIENTES: Cliente[] = [{
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
  }]

  constructor() { }

  getListClientes(): Cliente[]{
    return this.LIST_CLIENTES;
  }

  public getCliente(){return this.cliente}

  public setCliente(cliente: Cliente): void {
    this.cliente = cliente;
  }
}
