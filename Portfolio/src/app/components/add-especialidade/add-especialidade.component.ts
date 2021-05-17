import { Component, OnInit } from '@angular/core';
import { Especialidade } from 'src/app/models/especialidade.model';
import { EspecialidadesService } from 'src/app/services/especialidades.service';

@Component({
  selector: 'app-add-especialidade',
  templateUrl: './add-especialidade.component.html',
  styleUrls: ['./add-especialidade.component.css']
})
export class AddEspecialidadeComponent implements OnInit {
  especialidade: Especialidade = {
    nome: '',
    descricao: '',
    ativo: true
  };
  submitted = false;

  constructor(private especialidadeService: EspecialidadesService) { }

  ngOnInit(): void {
  }

  saveEspecialidade(): void {
    const data = {
      nome: this.especialidade.nome,
      descricao: this.especialidade.descricao
    };

    this.especialidadeService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newEspecialidade(): void {
    this.submitted = false;
    this.especialidade = {
      nome: '',
      descricao: '',
      ativo: true
    };
  }


}
