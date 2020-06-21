import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { NotasComponent } from './modules/notas/notas.component';
import { CalendarioComponent } from './modules/calendario/calendario.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/auth/auth.guard';
import { TarefasComponent } from './modules/tarefas/tarefas.component';


const routes: Routes = [{
  path: '',
  component: LoginComponent
},
  {
    path: 'home',
    component: DefaultComponent, 
     canActivate: [AuthGuard],
    children: [{
    path:'', 
    component:HomeComponent
  },{
    path:'notas',
    component: NotasComponent
  },{
    path:'tarefas',
    component: TarefasComponent
  },
  {
    path:'calendario',
    component: CalendarioComponent
}
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
