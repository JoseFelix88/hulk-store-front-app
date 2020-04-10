import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material';
import { MatPaginatorIntl, PageEvent, MatSort, MatPaginator } from "@angular/material";
import { ClienteService } from 'src/app/services/cliente.service';
import { Clientes } from 'src/app/models/cliente';
import { ImageIconService } from 'src/app/services/image-icon.service';
import { CrudClienteDialogComponent } from '../dialogs/crud-cliente-dialog/crud-cliente-dialog.component';
import { DialogService } from 'src/app/services/dialog.service';



@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  displayedColumns: string[] = ['numeroIdentificacion', 'Cliente', 'Telefono', 'direccion', 'correoElectronico', 'Acciones'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort , {static: true}) sort: MatSort;
  parametroFiltroBuscarCliente: string;

  constructor(private _clienteService: ClienteService
    , private _imageIconService: ImageIconService
    , private paginatorIntl: MatPaginatorIntl
    , public matDialog: MatDialog
    , private _dialogService: DialogService) {

    this._imageIconService.loadIconApp();
    this.paginatorIntl.itemsPerPageLabel = "Items por página";
  }


  ngOnInit() {
    this._clienteService.getListClientes().subscribe(lstClients => {
      this.dataSource.data = lstClients;
      this.dataSource.sort= this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
   const filterValue = (event.target as HTMLInputElement).value;
   this.dataSource.filter = filterValue.trim().toLowerCase();
 }

 openDialogCrearCliente(): void {
   this._dialogService.setTituloModal("Crear Cliente");
   this._dialogService.setInhabilitarCompomente(false);
   this._clienteService.setCliente(null);
      const dialogRef = this.matDialog.open(CrudClienteDialogComponent, {
      width: '650px',
      height:'600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'+result);
      this.ngOnInit();
     });
  }

  openDialogUpdateReadCliente(readUpdateCliente: Clientes, flag_accion: string): void {
    this._clienteService.setCliente(readUpdateCliente);
    if(flag_accion == "edit") {
      this._dialogService.setTituloModal("Editar Cliente");
      this._dialogService.setInhabilitarCompomente(false);
    } else {
      this._dialogService.setTituloModal("Ver Cliente");
      this._dialogService.setInhabilitarCompomente(true);
    }
    const dialogRef = this.matDialog.open(CrudClienteDialogComponent, {
        width: '650px',
        height:'600px'
      });
  }

}
