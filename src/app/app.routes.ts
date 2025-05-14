import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then((p) => p.HomeComponent) },
  {
    path: 'case-studies',
    children: [
      { path: 'bladder-boss', loadComponent: () => import('./pages/case-studies/bladder-boss/bladder-boss.component').then((p) => p.BladderBossComponent) },
      { path: 'boardmatch', loadComponent: () => import('./pages/case-studies/boardmatch/boardmatch.component').then((p) => p.BoardmatchComponent) },
      {
        path: 'financial-corp',
        loadComponent: () => import('./pages/case-studies/financial-corp/financial-corp.component').then((p) => p.FinancialCorpComponent),
      },
    ],
  },
  { path: '*', redirectTo: '' },
];
