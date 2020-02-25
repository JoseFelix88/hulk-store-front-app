import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClienteComponent } from './components/cliente/cliente.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'cliente', component: ClienteComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }


];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);