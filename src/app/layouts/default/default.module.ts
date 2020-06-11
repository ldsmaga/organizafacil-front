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


@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    NotasComponent,
    CalendarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    FullCalendarModule,
    MaterialModule
  ]
})
export class DefaultModule { }
