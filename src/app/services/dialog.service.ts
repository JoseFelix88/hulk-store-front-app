import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material'
import { ConfirmDialogComponent } from '../components/dialogs/confirm-dialog/confirm-dialog.component';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private tituloModal:string;
  private inhabilitarCompomente:boolean;

  constructor(private dialog: MatDialog) { }

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

  public openConfirmDialog(msj){
      return this.dialog.open(ConfirmDialogComponent,{
          width: '390px',
          panelClass: 'confirm-dialog-container',
          disableClose: true,
          data:{
            message: msj
          }
        });
  }

  public onClosedDialog(componentDialog: any): void{
    componentDialog.close(false);
  }
}
