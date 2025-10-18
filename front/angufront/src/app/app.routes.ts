import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { HabitacionesComponent } from './components/habitaciones/habitaciones.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { BarComponent } from './components/bar/bar.component';
import { RestauranteComponent } from './components/restaurante/restaurante.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'habitaciones', component: HabitacionesComponent },
  { path: 'reserva/:id', component: ReservaComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'bar', component: BarComponent }, 
  { path: 'restaurante', component: RestauranteComponent } 
];
