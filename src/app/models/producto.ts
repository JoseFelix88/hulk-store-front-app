import { Categoria } from './categoria';

export interface Producto {
  codigoProducto: number;
  codigoBarras: string;
  descripcion: string;
  stockActual: number;
  costoUnitario: number;
  precioVenta: number;
  valorUtilidad?: number;
  fechaActualizacion?: Date;
  fechaRegistro?: Date;
  marca?:string;
  categoria?: Categoria;
  descripcionCorta?:string;
}
