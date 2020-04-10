import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Clientes } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { DialogService } from 'src/app/services/dialog.service';


@Component({
  selector: 'app-crud-cliente-dialog',
  templateUrl: './crud-cliente-dialog.component.html',
  styleUrls: ['./crud-cliente-dialog.component.css']
})
export class CrudClienteDialogComponent implements OnInit {

  public formGroupCrudCliente: FormGroup;
  public cliente: Clientes;
  public titleModal: string;
  public inhabilitarCompomente: boolean;


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
    this.inhabilitarCompomente = this._dialogService.getInhabilitarCompomente();
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
    if(this.formGroupCrudCliente.get('codigoCliente').value != '') {
      this.cliente.codigoCliente = this.formGroupCrudCliente.get('codigoCliente').value;
    } else {
      this.cliente = this._clienteService.newCliente();
    }
    this.cliente.numeroIdentificacion = this.formGroupCrudCliente.get('numeroIdentificacion').value;
    this.cliente.nombres = this.formGroupCrudCliente.get('nombres').value;
    this.cliente.apellidos = this.formGroupCrudCliente.get('apellidos').value;
    this.cliente.telefono = this.formGroupCrudCliente.get('telefono').value;
    this.cliente.correoElectronico = this.formGroupCrudCliente.get('correoElectronico').value;
    this.cliente.direccion = this.formGroupCrudCliente.get('direccion').value;
    this._clienteService.savedClient(this.cliente).subscribe(rs => {
      console.log('rs: ', rs);
      this._clienteService.setCliente(rs);
      this.builderFormCrudCliente();
    }
  );
  }
}
