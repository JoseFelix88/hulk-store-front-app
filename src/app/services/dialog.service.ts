import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material'


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private tituloModal:string;
  private inhabilitarCompomente:boolean;

  public getTituloModal(): string{
    return this.tituloModal;
  }

  public setTituloModal(tituloModal: string): void{
    this.tituloModal = tituloModal;
  }

  public getInhabilitarCompomente(): boolean{
    return this.inhabilitarCompomente;
  }

  public setInhabilitarCompomente(inhabilitarCompomente: boolean): void{
    this.inhabilitarCompomente = inhabilitarCompomente;
  }



  constructor(private dialog: MatDialog) { }

/*  public openConfirmDialog(msj){

  return this.dialog.open(ConfirmDialogComponent,{
      width: '390px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      data:{
        message: msj
      }
    });
  }*/
}
