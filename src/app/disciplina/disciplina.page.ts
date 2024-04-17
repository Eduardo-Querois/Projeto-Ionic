import { Component, OnInit } from '@angular/core';
import { DadosService } from '../dados.service';
@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.page.html',
  styleUrls: ['./disciplina.page.scss'],
})
export class DisciplinaPage implements OnInit {
  public name!: string;
  public semestre!:string;
  public selectedOption!: string;
  public selectedOption2!:string;

  constructor(public dados: DadosService) {
    
   }

  ngOnInit() {
  }

  adicionar(): void {
    this.dados.addMateria(this.name,this.semestre,this.selectedOption,this.selectedOption2);
    console.log(this.dados.getMateria())
  }

}
