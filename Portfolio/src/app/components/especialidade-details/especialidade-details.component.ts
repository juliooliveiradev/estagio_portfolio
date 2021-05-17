import { Component, OnInit } from '@angular/core';
import { EspecialidadesService } from 'src/app/services/especialidades.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Especialidade } from 'src/app/models/especialidade.model';


@Component({
  selector: 'app-especialidade-details',
  templateUrl: './especialidade-details.component.html',
  styleUrls: ['./especialidade-details.component.css']
})
export class EspecialidadeDetailsComponent implements OnInit {
  currentEspecialidade: Especialidade = {
    nome:'',
    descricao: '',
    ativo: true
  };
  message = '';
  constructor(private especialidadeService: EspecialidadesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getEspecialidade(this.route.snapshot.params.id);
  }

  getEspecialidade(id: string): void {
    this.especialidadeService.get(id)
      .subscribe(
        data => {
          this.currentEspecialidade = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateAtivo(ativo: boolean): void {
    const data = {
      title: this.currentEspecialidade.nome,
      description: this.currentEspecialidade.descricao,
      ativo: ativo
    };

    this.especialidadeService.update(this.currentEspecialidade.id, data)
      .subscribe(
        response => {
          this.currentEspecialidade.ativo = ativo;
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  updateEspecialidade(): void {
    this.especialidadeService.update(this.currentEspecialidade.id, this.currentEspecialidade)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
          this.router.navigate(['/especialidades']);
        },
        error => {
          console.log(error);
        });
  }

  deleteEspecialidade(): void {
    this.especialidadeService.delete(this.currentEspecialidade.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/especialidades']);
        },
        error => {
          console.log(error);
        });
  }

}
