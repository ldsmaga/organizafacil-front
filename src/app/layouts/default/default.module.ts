import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { NotasComponent } from 'src/app/modules/notas/notas.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarioComponent } from 'src/app/modules/calendario/calendario.component';
import { MaterialModule } from 'src/app/material-module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'src/app/core/auth/token-interceptor';
import { TarefasComponent } from 'src/app/modules/tarefas/tarefas.component';


@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    NotasComponent,
    CalendarioComponent,
    TarefasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    FullCalendarModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  
})
export class DefaultModule { }
