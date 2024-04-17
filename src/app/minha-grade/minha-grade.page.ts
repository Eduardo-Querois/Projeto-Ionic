import { Component, OnInit } from '@angular/core';
import { DadosService } from '../dados.service';
import { Materia } from '../models/materia';

@Component({
  selector: 'app-minha-grade',
  templateUrl: './minha-grade.page.html',
  styleUrls: ['./minha-grade.page.scss'],
})
export class MinhaGradePage implements OnInit {
  disciplinas: Materia[] = [];

  constructor(private dadosService: DadosService) { }

  ngOnInit() {
    this.carregarDisciplinas();
  }

  carregarDisciplinas() {
    this.disciplinas = this.dadosService.getMateria().filter(disciplina => {if(disciplina.selecionada == true){return disciplina} else{return}});
  }

}
