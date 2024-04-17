import { Component, OnInit } from '@angular/core';
import { DadosService } from '../dados.service';
import { Materia } from '../models/materia';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.page.html',
  styleUrls: ['./grade.page.scss'],
})
export class GradePage implements OnInit {
  disciplinas: Materia[] = [];
  minhagrade: Materia[] = [];

  constructor(private dadosService: DadosService) { }

  ngOnInit() {
    this.carregarDisciplinas();
  }

  carregarDisciplinas() {
    this.disciplinas = this.dadosService.getMateria();
  }

  adicionar() {
    this.minhagrade = this.disciplinas.filter(disciplina => disciplina.selecionada);
    console.log('Disciplinas selecionadas:', this.minhagrade);
  }
}
