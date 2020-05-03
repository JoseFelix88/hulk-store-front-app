//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

//Rutas
import { APP_ROUTING } from './app.routes';

//Componentes
import { AppComponent } from './app.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CrudClienteDialogComponent } from './components/dialogs/crud-cliente-dialog/crud-cliente-dialog.component';
import { EstadisticaComprasClienteComponent } from './components/dialogs/crud-cliente-dialog/estadistica-compras-cliente/estadistica-compras-cliente.component';

//service
import { ClienteService } from './services/cliente.service';
import { ImageIconService } from './services/image-icon.service';
import { DialogService } from './services/dialog.service';
import { NotificationService } from './services/notification.service';

//Customs directivas
import { DisableControlDirectiveDirective } from './directives/disable-control-directive.directive';
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';

//Graficas
 import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CrudClienteDialogComponent,
    DisableControlDirectiveDirective,
    ConfirmDialogComponent,
    EstadisticaComprasClienteComponent
  ],
  entryComponents: [CrudClienteDialogComponent, ConfirmDialogComponent],
  imports: [
    BrowserModule,
    APP_ROUTING,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [ClienteService, ImageIconService, DialogService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
