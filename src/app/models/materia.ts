export class Materia {
    nome: string;
    semestre: string;
    selecionada: boolean;
    selecionada2: boolean;
    constructor(nome: string, semestre: string, selecionada: boolean ,selecionada2: boolean) {
      this.nome = nome;
      this.semestre = semestre;
      this.selecionada = selecionada
      this.selecionada2 = selecionada2
    }
  }