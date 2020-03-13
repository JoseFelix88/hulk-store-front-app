import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material';
import { MatPaginatorIntl, PageEvent } from "@angular/material/paginator";
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/cliente';
import { ImageIconService } from 'src/app/services/image-icon.service';
import { CrudClienteDialogComponent } from '../dialogs/crud-cliente-dialog/crud-cliente-dialog.component';
import { DialogService } from 'src/app/services/dialog.service';



@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  LIST_CLIENTES: Cliente[];
  constructor(private _clienteService: ClienteService
    , private _imageIconService: ImageIconService
    , private paginatorIntl: MatPaginatorIntl
    , public matDialog: MatDialog
    , private _dialogService: DialogService) {

    this.LIST_CLIENTES = _clienteService.getListClientes();
    this._imageIconService.loadIconApp();
    this.paginatorIntl.itemsPerPageLabel = "Items por página";
  }

  displayedColumns: string[] = ['numeroIdentificacion', 'Cliente', 'Telefono', 'direccion', 'correoElectronico', 'Acciones'];
  // dataSource = new MatTableDataSource<Cliente>(this.LIST_CLIENTES);
   dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  parametroFiltroBuscarCliente: string;
  ngOnInit() {
    this.dataSource.data = this.LIST_CLIENTES;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
   const filterValue = (event.target as HTMLInputElement).value;
   this.dataSource.filter = filterValue.trim().toLowerCase();
 }

 openDialogCrearCliente(): void {
   this._dialogService.setTituloModal("Crear Cliente");
   this._clienteService.setCliente(null);
      const dialogRef = this.matDialog.open(CrudClienteDialogComponent, {
      width: '650px',
      height:'600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'+result);

     });
  }

  openDialogUpdateReadCliente(readUpdateCliente: Cliente, flag_accion: string): void {
    this._clienteService.setCliente(readUpdateCliente);
    if(flag_accion == "edit") {
      this._dialogService.setTituloModal("Editar Cliente");
    } else {
      this._dialogService.setTituloModal("Ver Cliente");
    }
    const dialogRef = this.matDialog.open(CrudClienteDialogComponent, {
    width: '650px',
    height:'600px'
  });
  }

}
