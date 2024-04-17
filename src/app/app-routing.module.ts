import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'disciplina',
    loadChildren: () => import('./disciplina/disciplina.module').then( m => m.DisciplinaPageModule)
  },
  {
    path: 'grade',
    loadChildren: () => import('./grade/grade.module').then( m => m.GradePageModule)
  },
  {
    path: 'minha-grade',
    loadChildren: () => import('./minha-grade/minha-grade.module').then( m => m.MinhaGradePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
