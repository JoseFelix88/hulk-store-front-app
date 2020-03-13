import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { DialogService } from 'src/app/services/dialog.service';


@Component({
  selector: 'app-crud-cliente-dialog',
  templateUrl: './crud-cliente-dialog.component.html',
  styleUrls: ['./crud-cliente-dialog.component.css']
})
export class CrudClienteDialogComponent implements OnInit {

  public formGroupCrudCliente: FormGroup;
  public cliente: Cliente;
  public titleModal: string = 'Crear Cliente';


  constructor(private formBuildCrudCliente: FormBuilder
    , private _clienteService: ClienteService
    , private _dialogService: DialogService) { }

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
  }

  public builderFormCrudCliente() {
    this.cliente = this._clienteService.getCliente();
    console.log(this.cliente);
    if(this.cliente == null) {
      this.formGroupCrudCliente = this.formBuildCrudCliente.group({
        codigoCliente: [''],
        numeroIdentificacion: ['', [Validators.required]] ,
        nombres: ['', [Validators.required]] ,
        apellidos: [''] ,
        telefono: [''] ,
        direccion: [''] ,
        correoElectronico: ['']
      });

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

  }

  guardarCliente(){}



}
