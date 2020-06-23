import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from '../global/enpoint';
import { map } from 'rxjs/operators';
import { Producto } from '../models/producto';

export interface GetResponseProduct {
  _embedded: {
    productoes: Producto[];
    _link: { self: { href: string } };
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private producto: Producto;

  getProducto(): Producto {
    return this.producto;
  }
  
  setProducto(producto: Producto) {
    this.producto = producto;
  }

  private titlePage: string;

  constructor(private httpClient: HttpClient) { }

  public getTitlePage(): string {
    return this.titlePage;
  }

  public setTitlePage(titlePage: string) {
    this.titlePage = titlePage;
  }

  getListProductos(): Observable<Producto[]> {
    try {
         return this.httpClient.get<GetResponseProduct>(Endpoints.ENDPOINT_PRODUCTS)
                    .pipe(
                      map(response => response._embedded.productoes)
                    );
    } catch (error) {
      console.log('No fue posible conectar con el servicio: ', error);
      return null;
    }
  }

  getProductByParamAny(textSearch: string): Observable<any> {
      return this.httpClient.get(
                  Endpoints.ENDPOINT_PRODUCTS + Endpoints.PRODUCT_SEARCH_PARAM_ANY 
                + textSearch)
                .pipe( map(response => response["_embedded"].productoes) );
                
  }
}
