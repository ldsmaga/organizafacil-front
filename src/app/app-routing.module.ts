import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { NotasComponent } from './modules/notas/notas.component';
import { CalendarioComponent } from './modules/calendario/calendario.component';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path:'',
    component:HomeComponent
  },{
    path:'notas',
    component: NotasComponent
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
