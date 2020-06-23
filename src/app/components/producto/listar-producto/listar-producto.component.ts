import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ImageIconService } from 'src/app/services/image-icon.service';
import { ProductoService } from 'src/app/services/producto.service';
import { NotificationService } from 'src/app/services/notification.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})

export class ListarProductoComponent implements OnInit {
  public LIST_PRODUCTOS: any[] = []
  private lstProductsTemp: any[] = [];

  public flagLoading: boolean;
  public messangeError: string;

  constructor(private _imageIconService: ImageIconService
    , private _productoService: ProductoService
    , private _notificationService: NotificationService
    , private _router: Router) { }

  ngOnInit() {
    this.flagLoading = true;
    this._productoService.getListProductos().subscribe(data => {
      this.LIST_PRODUCTOS = data;
      this.lstProductsTemp = data;
      this.flagLoading = false;
    }, (errorService) => {
      this.flagLoading = false;
      if (errorService.ok === false && errorService.status === 0) {
        let messange = new String('No se pudo establecer conexión con el servidor.\n'
          + ' Por lo tanto, el servicio no se encuentra disponible. \n');
        this.messangeError = messange.concat('El error presentado es el siguiente: ' + errorService.message);
      } else {
        this.messangeError = 'Se presento el siguiente error: ' + errorService.message;
      }
      this._notificationService.openSnackBar(this.messangeError, 'ERROR');
    });
  }

  buscarProducto(textSearch: string) {
    this.flagLoading = true;
    let lstProducts = this.LIST_PRODUCTOS.filter((producto) => {
      return this.getFilterProduct(textSearch, producto);
    });

    if (lstProducts.length > 0) {
      if (textSearch == '') {
        this.LIST_PRODUCTOS = this.lstProductsTemp;
      } else {
        this.LIST_PRODUCTOS = lstProducts;
      }
      this.flagLoading = false;
    } else {
      this.flagLoading = true;
      this._productoService.getProductByParamAny(textSearch)
        .subscribe(data => {
          this.LIST_PRODUCTOS = data;
          this.flagLoading = false;
        }, (errorService) => {
          this.flagLoading = false;
          if (errorService.ok === false && errorService.status === 0) {
              this.messangeError = 'El servicio no se encuentra disponible. ';
          } else {
            this.messangeError = 'Se presento el siguiente error: ' + errorService.message;
          }
          this._notificationService.openSnackBar(this.messangeError, 'ERROR');
        });

    }

  }

  getFilterProduct(textSearch: string, producto: any) {
    return (producto.descripcion.toUpperCase().indexOf(textSearch.toUpperCase()) > -1) ||
      (producto.descripcionCorta == '' ||
        producto.descripcionCorta == null ?
        producto.descripcion : producto.descripcionCorta).toUpperCase()
        .indexOf(textSearch.toUpperCase()) > -1 ||
      (producto.marca == '' || producto.marca == null ? '' : producto.marca).toUpperCase()
        .indexOf(textSearch.toUpperCase()) > -1 ||
      (producto.categoria == null || producto.categoria.descripcionCategoria == null
        || producto.categoria.descripcionCategoria == '' ?
        '' : producto.categoria.descripcionCategoria).toUpperCase()
        .indexOf(textSearch.toUpperCase()) > -1 ||
      (producto.codigoBarras.toUpperCase().indexOf(textSearch.toUpperCase()) > -1);
  }

  editarProducto(producto: Producto) {
    this._productoService.setTitlePage('Editar Producto')
    this._productoService.setProducto(producto);
    this._router.navigate(['add-edit-producto']);
  }

}
