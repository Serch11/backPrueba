import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstantesComponent } from './component/estantes/estantes.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { EditarComponent } from './component/editar/editar.component';
import { MostrarEstanteComponent } from './component/mostrar-estante/mostrar-estante.component';

@NgModule({
  declarations: [
    AppComponent,
    EstantesComponent,
    HeaderComponent,
    FooterComponent,
    EditarComponent,
    MostrarEstanteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
