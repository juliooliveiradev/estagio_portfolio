import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicoListComponent } from './components/medico-list/medico-list.component';
import { MedicoDetailsComponent } from './components/medico-details/medico-details.component';
import { AddMedicoComponent } from './components/add-medico/add-medico.component';
import { EspecialidadeListComponent } from './components/especialidade-list/especialidade-list.component';
import { EspecialidadeDetailsComponent } from './components/especialidade-details/especialidade-details.component';
import { AddEspecialidadeComponent } from './components/add-especialidade/add-especialidade.component';


const routes: Routes = [
  { path: '', redirectTo: 'medicos', pathMatch: 'full' },
  { path: 'medicos', component: MedicoListComponent },
  { path: 'medicos/:id', component: MedicoDetailsComponent },
  { path: 'addMedicos', component: AddMedicoComponent },
  { path: 'especialidades', component: EspecialidadeListComponent },
  { path: 'especialidades/:id', component: EspecialidadeDetailsComponent },
  { path: 'addEspecialidade', component: AddEspecialidadeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }