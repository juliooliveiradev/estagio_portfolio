import { Component, OnInit } from '@angular/core';
import { Especialidade } from 'src/app/models/especialidade.model';
import { EspecialidadesService } from 'src/app/services/especialidades.service';

@Component({
  selector: 'app-especialidade-list',
  templateUrl: './especialidade-list.component.html',
  styleUrls: ['./especialidade-list.component.css']
})
export class EspecialidadeListComponent implements OnInit {
  especialidades?: Especialidade[];
  currentEspecialidade?: Especialidade;
  currentIndex = -1;
  nome = '';

  constructor(private especialidadeService: EspecialidadesService) { }

  ngOnInit(): void {
    this.retrieveEspecialidades();
  }

  retrieveEspecialidades(): void {
    this.especialidadeService.getAll()
      .subscribe(
        data => {
          this.especialidades = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveEspecialidades();
    this.currentEspecialidade = undefined;
    this.currentIndex = -1;
  }

  setActiveEspecialidade(especialidade: Especialidade, index: number): void {
    this.currentEspecialidade = especialidade;
    this.currentIndex = index;
  }

  removeAllEspecialidades(): void {
    this.especialidadeService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchNome(): void {
    this.especialidadeService.findByNome(this.nome)
      .subscribe(
        data => {
          this.especialidades = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


}
