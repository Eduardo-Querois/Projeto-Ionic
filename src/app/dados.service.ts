import { Injectable } from '@angular/core';
import { Materia } from './models/materia';


@Injectable({
  providedIn: 'root'
})
export class DadosService {
  public materias: Materia[] = []; // Define o tipo como Materia[] e inicializa como array vazio
  constructor() { }

  addMateria(nome: string, semestre: string, selecionada: string, selecionada2: string): void { // Corrige o tipo de dados do semestre para number
    let aux = new Materia(nome, semestre, false , false);
    this.materias.push(aux);
  }

  getMateria(): Materia[] { // Corrige o tipo de retorno para Materia[]
    return this.materias;
  }


}
