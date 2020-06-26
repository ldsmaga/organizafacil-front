import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DefaultModule } from './layouts/default/default.module';
import { NotasService } from './modules/notas/notas.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { MaterialModule } from './material-module';
import { TokenInterceptor } from './core/auth/token-interceptor';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { EditarTarefaComponent } from './modules/tarefas/editar-tarefa/editar-tarefa.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    EditarTarefaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    DefaultModule,
    HttpClientModule,
    FormsModule,
    MaterialModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }, 
  NotasService, 
  LoginService 
],
  bootstrap: [AppComponent]
})
export class AppModule { }
