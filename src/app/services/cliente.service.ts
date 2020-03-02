import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

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

  filtroBuscarCliente(filtroBuscarCliente:string): Cliente[]{
    let lstClientes: Cliente[] = [];
    filtroBuscarCliente = filtroBuscarCliente.toLowerCase();
    for (let cliente of this.LIST_CLIENTES) {
      let tododatacliente: string ='';
       tododatacliente = tododatacliente
       .concat(cliente.nombres)
       .concat(' ')
       .concat( cliente.apellidos )
       .concat(' ')
       .concat( cliente.numeroIdentificacion )
       .concat(' ')
       .concat( cliente.telefono )
       .concat(' ')
       .concat( cliente.direccion )
       .concat(' ')
       .concat(cliente.correoElectronico);
      if(tododatacliente.toLowerCase().indexOf( filtroBuscarCliente ) >= 0) {
        console.log(tododatacliente);
        lstClientes.push( cliente );
      }
    }
    return lstClientes;
  }
}
