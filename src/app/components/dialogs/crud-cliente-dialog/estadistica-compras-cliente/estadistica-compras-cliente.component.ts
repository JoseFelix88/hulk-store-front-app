import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-estadistica-compras-cliente',
  templateUrl: './estadistica-compras-cliente.component.html',
  styleUrls: ['./estadistica-compras-cliente.component.css']
})
export class EstadisticaComprasClienteComponent implements OnInit {

  private reporteDetalleCompra: any;
  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';
  public existCustomer: boolean = false;

  constructor(private _clienteService: ClienteService){}

  ngOnInit(): void {
    if (this._clienteService.getCliente() != null) {
      this.existCustomer = true;
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
      });
    }
  }


  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
