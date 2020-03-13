import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ImageIconService {

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer,) { }

  public loadIconApp(): void{
    this.iconRegistry.addSvgIcon(
      'edit',
    this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icon/edit-icon.svg'));

    this.iconRegistry.addSvgIcon(
        'delete',
    this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icon/delete-icon.svg'));

    this.iconRegistry.addSvgIcon(
          'add',
    this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icon/add.svg'));

    this.iconRegistry.addSvgIcon(
          'info',
    this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icon/info.svg'));

    this.iconRegistry.addSvgIcon(
          'print',
    this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icon/print.svg'));
  }
}
