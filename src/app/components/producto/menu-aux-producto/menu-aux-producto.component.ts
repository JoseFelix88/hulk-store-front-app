import { Component } from '@angular/core';
import { ImageIconService } from 'src/app/services/image-icon.service';

import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';


@Component({
  selector: 'app-menu-aux-producto',
  templateUrl: './menu-aux-producto.component.html',
  styles: ['./menu-aux-producto.component.css']
})
export class MenuAuxProductoComponent {
  
  constructor(private _imageIconService: ImageIconService, 
              private _router: Router,
              private _productoSerivce: ProductoService){
    this._imageIconService.loadIconApp();
  }

  navegateAddProduct() {
    this._productoSerivce.setTitlePage('Crear Producto');
    this._router.navigate(['add-edit-producto']);
  }

}
