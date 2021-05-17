import { Component, OnInit } from '@angular/core';
import { Medico } from 'src/app/models/medico.model';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-add-medico',
  templateUrl: './add-medico.component.html',
  styleUrls: ['./add-medico.component.css']
})
export class AddMedicoComponent implements OnInit {
  medico: Medico = {
    nome: '',
    dataNascimento: new Date(Date.now()),
    especialidade: '',
    ativo: true
  };
  submitted = false;

  constructor(private medicoService: MedicoService) { }

  ngOnInit(): void {
  }

  saveMedico(): void {
    const data = {
      nome: this.medico.nome,
      dataNascimento: this.medico.dataNascimento,
      especialidade: this.medico.especialidade
    };

    this.medicoService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newMedico(): void {
    this.submitted = false;
    this.medico = {
      nome: '',
      dataNascimento: new Date(Date.now()),
      especialidade: '',
      ativo: true
    };
  }

}
