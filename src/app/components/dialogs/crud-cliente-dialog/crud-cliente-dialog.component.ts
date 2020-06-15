import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { DialogService } from 'src/app/services/dialog.service';
import { NotificationService } from 'src/app/services/notification.service';
import { MatDialogRef } from '@angular/material';
import { ImageIconService } from 'src/app/services/image-icon.service';


@Component({
  selector: 'app-crud-cliente-dialog',
  templateUrl: './crud-cliente-dialog.component.html',
  styleUrls: ['./crud-cliente-dialog.component.css']
})
export class CrudClienteDialogComponent implements OnInit {

  public formGroupCrudCliente: FormGroup;
  public cliente: Cliente;
  public titleModal: string;
  public inhabilitarCompomente: boolean;


  constructor(private formBuildCrudCliente: FormBuilder
    , private _clienteService: ClienteService
    , private _dialogService: DialogService
    , private _notificationService: NotificationService
    , private dialogRef: MatDialogRef<CrudClienteDialogComponent>
    , private _imageIconService: ImageIconService) { }

  ngOnInit(): void {
    this.formGroupCrudCliente = new FormGroup({
      codigoCliente: new FormControl(),
      numeroIdentificacion: new FormControl(),
      nombres: new FormControl(),
      apellidos: new FormControl(),
      telefono: new FormControl(),
      correoElectronico: new FormControl(),
      direccion: new FormControl()
    });
    this.builderFormCrudCliente();
    this.titleModal = this._dialogService.getTituloModal();
    this.inhabilitarCompomente = this._dialogService.getInhabilitarCompomente();
    this._imageIconService.loadIconApp();
  }

  public builderFormCrudCliente() {
    this.cliente = this._clienteService.getCliente();
    console.log(this.cliente);
    if(this.cliente == null) {
      this.cleanFormCliente();
    } else {
      this.formGroupCrudCliente = this.formBuildCrudCliente.group({
        codigoCliente: this.cliente.codigoCliente ,
        numeroIdentificacion: [this.cliente.numeroIdentificacion, [Validators.required]] ,
        nombres: [this.cliente.nombres, [Validators.required]] ,
        apellidos: this.cliente.apellidos ,
        telefono: this.cliente.telefono ,
        direccion: this.cliente.direccion ,
        correoElectronico: this.cliente.correoElectronico
      });
    }
  }

  cleanFormCliente(){
    this.formGroupCrudCliente.reset;
    this.formGroupCrudCliente = this.formBuildCrudCliente.group({
      codigoCliente: [''],
      numeroIdentificacion: ['', [Validators.required]] ,
      nombres: ['', [Validators.required]] ,
      apellidos: [''] ,
      telefono: [''] ,
      direccion: [''] ,
      correoElectronico: ['']
    });
  }

  guardarCliente() {
    let msjConfirma: string;
    let msjNotificacion: string;
    if(this.formGroupCrudCliente.get('codigoCliente').value != '') {
      msjConfirma = '¿Estás seguro que desea modificar el cliente?'
      msjNotificacion = 'El cliente ' + this.formGroupCrudCliente.get('nombres').value +
                        ' ' + this.formGroupCrudCliente.get('apellidos').value +
                        ' ha sido modificado correctamente.'
      this.cliente.codigoCliente = this.formGroupCrudCliente.get('codigoCliente').value;
    } else {
      msjConfirma = '¿Estás seguro que desea registrar el cliente?'
      msjNotificacion = 'El cliente ' + this.formGroupCrudCliente.get('nombres').value +
                        ' ' + this.formGroupCrudCliente.get('apellidos').value +
                        ' ha sido registrado correctamente.'
      this.cliente = this._clienteService.newCliente();
    }
    this._dialogService.openConfirmDialog(msjConfirma)
        .afterClosed().subscribe(confirm => {
          if(confirm) {
                this.cliente.numeroIdentificacion = this.formGroupCrudCliente.get('numeroIdentificacion').value;
                this.cliente.nombres = this.formGroupCrudCliente.get('nombres').value;
                this.cliente.apellidos = this.formGroupCrudCliente.get('apellidos').value;
                this.cliente.telefono = this.formGroupCrudCliente.get('telefono').value;
                this.cliente.correoElectronico = this.formGroupCrudCliente.get('correoElectronico').value;
                this.cliente.direccion = this.formGroupCrudCliente.get('direccion').value;
                // this._clienteService.savedClient(this.formGroupCrudCliente.value).subscribe(rs => {
                this._clienteService.savedClient(this.cliente).subscribe(rs => {
                  console.log('rs: ', rs);
                  this._clienteService.setCliente(rs);
                  this.builderFormCrudCliente();
                  this._notificationService.openSnackBar(msjNotificacion, null);
                  this.dialogRef.close(false);
                }
              );
          }
        });
  }

  obtenerBalanceUltimasComprasCliente() {
    this._clienteService.setCliente(this.cliente);
  }

}
