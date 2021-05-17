import { Component, OnInit } from '@angular/core';
import { MedicoService } from 'src/app/services/medico.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Medico } from 'src/app/models/medico.model';

@Component({
  selector: 'app-medico-details',
  templateUrl: './medico-details.component.html',
  styleUrls: ['./medico-details.component.css']
})
export class MedicoDetailsComponent implements OnInit {

  currentMedico: Medico = {
    nome: '',
    dataNascimento: new Date(Date.now()),
    especialidade: '',
    ativo: false
  };
  message = '';

  constructor(
    private medicoService: MedicoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getMedico(this.route.snapshot.params.id);
  }

  getMedico(id: string): void {
    this.medicoService.get(id)
      .subscribe(
        data => {
          this.currentMedico = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateAtivo(status: boolean): void {
    const data = {
      nome: this.currentMedico.nome,
      dataNascimento: this.currentMedico.dataNascimento,
      especialidade: this.currentMedico.especialidade,
      ativo : status
    };

    this.medicoService.update(this.currentMedico.id, data)
      .subscribe(
        response => {
          this.currentMedico.ativo = status;
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  updateMedico(): void {
    this.medicoService.update(this.currentMedico.id, this.currentMedico)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
          this.router.navigate(['/medicos']);
        },
        error => {
          console.log(error);
        });
  }

  deleteMedico(): void {
    this.medicoService.delete(this.currentMedico.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/medicos']);
        },
        error => {
          console.log(error);
        });
  }

}
