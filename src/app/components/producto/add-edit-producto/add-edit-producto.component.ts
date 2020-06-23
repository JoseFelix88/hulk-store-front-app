import { Component, OnInit, Input } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-add-edit-producto',
  templateUrl: './add-edit-producto.component.html',
  styleUrls: ['./add-edit-producto.component.css']
})
export class AddEditProductoComponent implements OnInit {

  titlePage: string;
  private producto: Producto;

  public formGroupProduct: FormGroup;

  constructor(private _productoService: ProductoService
            , private _formBuildProduct: FormBuilder) {

    this.titlePage = _productoService.getTitlePage() === '' ||  _productoService.getTitlePage() === undefined ?
                    'Crear Producto' : _productoService.getTitlePage();
   }

  ngOnInit() {
    this.groupFormProducto();
    this.builderFormProducto();
  }

  private groupFormProducto() {
    this.formGroupProduct = new FormGroup({
      codigoProducto: new FormControl([Validators.required]),
      codigoBarras: new FormControl(),
      descripcion: new FormControl(),
      stockActual: new FormControl(),
      costoUnitario: new FormControl(),
      precioVenta: new FormControl(),
      valorUtilidad: new FormControl({value: this.calcularUtilidad(), disabled: true}),
      fechaActualizacion: new FormControl({ value: null,  disabled: true }),
      fechaRegistro: new FormControl({ value: null, disabled: true }),
      marca: new FormControl(),
      categoria: new FormControl(),
      descripcionCorta: new FormControl()
    });
  }

  calcularUtilidad() {
    console.log('calculando...!!')
    return 0;
  }

  cleanFormProduct() {}

  guardarProduct() {}

  public builderFormProducto() {
    this.producto = this._productoService.getProducto();
    
    if(this.producto != undefined) {
      this.formGroupProduct = this._formBuildProduct.group({
        codigoProducto: this.producto.codigoProducto,
        codigoBarras: [this.producto.codigoBarras, [Validators.required]] ,
        descripcion: [this.producto.descripcion, [Validators.required]] ,
        stockActual: this.producto.stockActual ,
        costoUnitario: this.producto.costoUnitario ,
        precioVenta: this.producto.precioVenta ,
        valorUtilidad: this.producto.valorUtilidad,
        fechaActualizacion: this.producto.fechaActualizacion,
        fechaRegistro: this.producto.fechaRegistro,
        marca: this.producto.marca,
        categoria: this.producto.categoria,
        descripcionCorta: this.producto.descripcionCorta
      });
    } else {
      this.formGroupProduct.reset;
    }
  }

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

}

interface Food {
  value: string;
  viewValue: string;
}
