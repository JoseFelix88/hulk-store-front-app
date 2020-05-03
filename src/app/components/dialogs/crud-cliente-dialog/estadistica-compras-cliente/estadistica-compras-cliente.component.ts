import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { ClienteService } from 'src/app/services/cliente.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginatorIntl, MatSort, MatPaginator } from "@angular/material";

@Component({
  selector: 'app-estadistica-compras-cliente',
  templateUrl: './estadistica-compras-cliente.component.html',
  styleUrls: ['./estadistica-compras-cliente.component.css']
})
export class EstadisticaComprasClienteComponent implements OnInit {
  ngOnInit(): void {

    this._clienteService.getLatestBalancePurchaseCustomer(this._clienteService.getCliente().codigoCliente)
                    .subscribe(data =>{
                        this.reporteDetalleCompra = JSON.parse(JSON.stringify(data));
                        console.log(this.reporteDetalleCompra);
                        for (let index = 0; index < this.reporteDetalleCompra._embedded.reporteDetalleComprasClienteProxies.length; index++) {
                          this.doughnutChartLabels[index] = this.reporteDetalleCompra._embedded
                                                  .reporteDetalleComprasClienteProxies[index].descripcionProducto;
                          this.doughnutChartData[index]  = this.reporteDetalleCompra._embedded
                                                  .reporteDetalleComprasClienteProxies[index].cantidadComprada;
                        }
                        console.log("  this.doughnutChartLabels: " +   this.doughnutChartLabels)
                        console.log("  this.doughnutChartData: " +  this.doughnutChartData.length)
                        this.dataSource.data = this.reporteDetalleCompra._embedded.reporteDetalleComprasClienteProxies;
                        this.dataSource.sort= this.sort;
                        this.dataSource.paginator = this.paginator;
                    });

  }

  private reporteDetalleCompra: any;
  displayedColumns: string[] = ['numeroFactura', 'fechaVenta', 'descripcionProducto', 'cantidad', 'valorUnidad', 'valorTotal'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort , {static: true}) sort: MatSort;

  constructor(private _clienteService: ClienteService
    , private paginatorIntl: MatPaginatorIntl){

      this.paginatorIntl.itemsPerPageLabel = "Items por página";
  }

  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
