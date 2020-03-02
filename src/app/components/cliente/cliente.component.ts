import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/cliente';



@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  LIST_CLIENTES: Cliente[];
  constructor(private _clienteService: ClienteService) {
    this.LIST_CLIENTES = _clienteService.getListClientes();
  }

  displayedColumns: string[] = ['numeroIdentificacion', 'Cliente', 'Telefono', 'direccion', 'correoElectronico'];
  // dataSource = new MatTableDataSource<Cliente>(this.LIST_CLIENTES);
   dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  parametroFiltroBuscarCliente: string;
  ngOnInit() {
    this.dataSource.data = this.LIST_CLIENTES;
    this.dataSource.paginator = this.paginator;
  }

  filtroBuscarCliente(parametroFiltroBuscarCliente: string) {
    this.parametroFiltroBuscarCliente = parametroFiltroBuscarCliente;
    this.LIST_CLIENTES = this._clienteService.filtroBuscarCliente(parametroFiltroBuscarCliente);
  }

  applyFilter(event: Event) {
   const filterValue = (event.target as HTMLInputElement).value;
   this.dataSource.filter = filterValue.trim().toLowerCase();
 }
}
