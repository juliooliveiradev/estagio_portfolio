import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMedicoComponent } from './components/add-medico/add-medico.component';
import { MedicoDetailsComponent } from './components/medico-details/medico-details.component';
import { MedicoListComponent } from './components/medico-list/medico-list.component';
import { AddEspecialidadeComponent } from './components/add-especialidade/add-especialidade.component';
import { EspecialidadeDetailsComponent } from './components/especialidade-details/especialidade-details.component';
import { EspecialidadeListComponent } from './components/especialidade-list/especialidade-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AddMedicoComponent,
    MedicoDetailsComponent,
    MedicoListComponent,
    AddEspecialidadeComponent,
    EspecialidadeDetailsComponent,
    EspecialidadeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
