import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './view/heroes/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { DashboardComponent } from './view/heroes/dashboard/dashboard.component';
import { TableComponent } from './view/heroes/table/table.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AdministracionComponent } from './view/concepts/administracion/administracion.component';
import { AdministracionProyectosComponent } from './view/concepts/administracion-proyectos/administracion-proyectos.component';
import { NegociacionComponent } from './view/concepts/negociacion/negociacion.component';
import { ProcesoAdminComponent } from './view/concepts/proceso-admin/proceso-admin.component';
import { ManipulacionComponent } from './view/concepts/manipulacion/manipulacion.component';
import { EficaciaComponent } from './view/concepts/eficacia/eficacia.component';
import { EficienciaComponent } from './view/concepts/eficiencia/eficiencia.component';
import { RiesgosComponent } from './view/concepts/riesgos/riesgos.component';
import { RiesgosProyectosComponent } from './view/concepts/riesgos-proyectos/riesgos-proyectos.component';
import { ModeloComponent } from './view/modelo/modelo.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AdministracionComponent,
    AdministracionProyectosComponent,
    NegociacionComponent,
    ProcesoAdminComponent,
    ManipulacionComponent,
    EficaciaComponent,
    EficienciaComponent,
    RiesgosComponent,
    RiesgosProyectosComponent,
    ModeloComponent,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    TableComponent,
    MatSidenavModule,
    DashboardComponent,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
