import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ListarProductoComponent } from './components/producto/listar-producto/listar-producto.component';
import { AddEditProductoComponent } from './components/producto/add-edit-producto/add-edit-producto.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'cliente', component: ClienteComponent },
    { path: 'list-producto', component: ListarProductoComponent },
    { path: 'add-edit-producto', component: AddEditProductoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }


];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
