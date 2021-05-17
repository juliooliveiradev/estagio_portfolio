import { Component, OnInit } from '@angular/core';
import { Medico } from 'src/app/models/medico.model';
import { MedicoService} from 'src/app/services/medico.service';

@Component({
  selector: 'app-medico-list',
  templateUrl: './medico-list.component.html',
  styleUrls: ['./medico-list.component.css']
})

export class MedicoListComponent implements OnInit {

  medicos?: Medico[];
  currentMedico?: Medico;
  currentIndex = -1;
  nome = '';
  especialidade = '';

  constructor(private medicoService: MedicoService) { }

  ngOnInit(): void {
    this.retrieveMedicos();
  }

  retrieveMedicos(): void {
    this.medicoService.getAll()
      .subscribe(
        data => {
          this.medicos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveMedicos();
    this.currentMedico = undefined;
    this.currentIndex = -1;
  }

  setActiveMedico(medico: Medico, index: number): void {
    this.currentMedico = medico;
    this.currentIndex = index;
  }

  removeAllMedicos(): void {
    this.medicoService.deleteAll()
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
    this.medicoService.findByNome(this.nome)
      .subscribe(
        data => {
          this.medicos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  searchEspecialidade(): void {
    this.medicoService.findByEspecialidade(this.especialidade)
      .subscribe(
        data => {
          this.medicos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
