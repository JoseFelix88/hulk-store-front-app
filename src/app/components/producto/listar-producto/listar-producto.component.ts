import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ImageIconService } from 'src/app/services/image-icon.service';
import { ProductoService } from 'src/app/services/producto.service';



@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})

export class ListarProductoComponent implements OnInit {
  public LIST_PRODUCTOS: Producto[] = [{
    codigoProducto: 1,
    codigoBarras: '7501001305758',
    descripcion: 'Vick Drops pastilla sabor cereza x 5 und',
    stockActual: 100,
    costoUnitario: 750,
    precioVenta: 1500,
    marca: 'Vick',
    categoria:{descripcionCategoria:'Pastillas'},
    descripcionCorta: 'Vick Drops Pastilla cereza X 5 und'
  },
  {
    codigoProducto: 2,
    codigoBarras: '7706569001450',
    descripcion: 'Naproxeno 500 mg tabletas recubiertas x 10 und',
    stockActual: 20,
    costoUnitario: 3500,
    precioVenta: 6500,
    marca: 'American Generic',
    categoria:{descripcionCategoria:'Tabletas'},
    descripcionCorta: "Naproxeno 500MG Tab X 10 und"
  },
  {
    codigoProducto: 3,
    codigoBarras: '7702025186464',
    descripcion: 'Noel wafers',
    stockActual: 20,
    costoUnitario: 500,
    precioVenta: 4500,
    marca: 'Noel',
    descripcionCorta: "Noel wafers",
    categoria:{descripcionCategoria:'Varios'}
  },
  {
    codigoProducto: 4,
    codigoBarras: '040000514510',
    descripcion: 'Capsulas de Chocolate m & m',
    stockActual: 20,
    costoUnitario: 3500,
    precioVenta: 6500,
    marca: 'Peanut',
    categoria:{descripcionCategoria:'Varios'},
    descripcionCorta: "m & m"
  },
  {
    codigoProducto: 4,
    codigoBarras: '040000514510',
    descripcion: 'Capsulas de Chocolate m & m',
    stockActual: 20,
    costoUnitario: 3500,
    precioVenta: 6500,
    marca: 'Peanut',
    categoria:{descripcionCategoria:'Varios'},
    descripcionCorta: "m & m"
  },
  {
    codigoProducto: 3,
    codigoBarras: '7702025186464',
    descripcion: 'Noel wafers',
    stockActual: 20,
    costoUnitario: 500,
    precioVenta: 4500,
    marca: 'Noel',
    descripcionCorta: "Noel wafers",
    categoria:{descripcionCategoria:'Varios'}
  },
  {
    codigoProducto: 4,
    codigoBarras: '040000514510',
    descripcion: 'Capsulas de Chocolate m & m',
    stockActual: 20,
    costoUnitario: 3500,
    precioVenta: 6500,
    marca: 'Peanut',
    categoria:{descripcionCategoria:'Varios'},
    descripcionCorta: "m & m"
  },
  {
    codigoProducto: 4,
    codigoBarras: '040000514510',
    descripcion: 'Capsulas de Chocolate m & m',
    stockActual: 20,
    costoUnitario: 3500,
    precioVenta: 6500,
    marca: 'Peanut',
    categoria:{descripcionCategoria:'Varios'},
    descripcionCorta: "m & m"
  },
  {
    codigoProducto: 3,
    codigoBarras: '7702025186464',
    descripcion: 'Noel wafers',
    stockActual: 20,
    costoUnitario: 500,
    precioVenta: 4500,
    marca: 'Noel',
    descripcionCorta: "Noel wafers",
    categoria:{descripcionCategoria:'Varios'}
  },
  {
    codigoProducto: 4,
    codigoBarras: '040000514510',
    descripcion: 'Capsulas de Chocolate m & m',
    stockActual: 20,
    costoUnitario: 3500,
    precioVenta: 6500,
    marca: 'Peanut',
    categoria:{descripcionCategoria:'Varios'},
    descripcionCorta: "m & m"
  },
  {
    codigoProducto: 4,
    codigoBarras: '040000514510',
    descripcion: 'Capsulas de Chocolate m & m',
    stockActual: 20,
    costoUnitario: 3500,
    precioVenta: 6500,
    marca: 'Peanut',
    categoria:{},
    descripcionCorta: "m & m"
  }
]


  constructor(private _imageIconService: ImageIconService, 
              private _productoService: ProductoService) { }

  ngOnInit() {
    this._imageIconService.loadIconApp();
    this._productoService.getListProductos()
          .subscribe(data => {
            this.LIST_PRODUCTOS = data;
          });
  }

  buscarProducto(textSearch: string) {
    console.log(textSearch);
    this._productoService.getProductByParamAny(textSearch)
        .subscribe(data => {
          console.log(data._embedded.productoes);
          this.LIST_PRODUCTOS = data._embedded.productoes;
        });
  }

}
