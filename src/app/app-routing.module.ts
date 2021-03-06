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
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'entrenamientos',
    loadChildren: () => import('./entrenamientos/entrenamientos.module').then( m => m.EntrenamientosPageModule)
  },
  {
    path: 'progresos',
    loadChildren: () => import('./progresos/progresos.module').then( m => m.ProgresosPageModule)
  },
  {
    path: 'cardio',
    loadChildren: () => import('./cardio/cardio.module').then( m => m.CardioPageModule)
  },
  {
    path: 'brazos',
    loadChildren: () => import('./brazos/brazos.module').then( m => m.BrazosPageModule)
  },
  {
    path: 'piernasgluteos',
    loadChildren: () => import('./piernasgluteos/piernasgluteos.module').then( m => m.PiernasgluteosPageModule)
  },
  {
    path: 'abdomen',
    loadChildren: () => import('./abdomen/abdomen.module').then( m => m.AbdomenPageModule)
  },
  {
    path: 'hombrosespalda',
    loadChildren: () => import('./hombrosespalda/hombrosespalda.module').then( m => m.HombrosespaldaPageModule)
  },
  {
    path: 'addregistro',
    loadChildren: () => import('./addregistro/addregistro.module').then( m => m.AddregistroPageModule)
  },
  {
    path: 'ejercicio',
    loadChildren: () => import('./ejercicio/ejercicio.module').then( m => m.EjercicioPageModule)
  },
  {
    path: 'editprogreso',
    loadChildren: () => import('./editprogreso/editprogreso.module').then( m => m.EditprogresoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
