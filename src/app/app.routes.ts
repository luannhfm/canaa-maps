import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { MapsComponent } from './maps/maps.component';

export const routes: Routes = [
   { path: '', pathMatch: 'full', redirectTo: 'visitas' }, // / -> /visitas
  { path: 'visitas', component: ListComponent },
  { path: 'maps', component: MapsComponent },
  { path: '**', redirectTo: 'visitas' }                   // opcional: rota “coringa”

];
