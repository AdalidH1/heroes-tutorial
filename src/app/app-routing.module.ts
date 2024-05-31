import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './view/heroes/form/form.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './view/heroes/dashboard/dashboard.component';
import { TableComponent } from './view/heroes/table/table.component';
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

const routes: Routes = [
  {path:"", redirectTo: "/dashboard", pathMatch: "full"},
  {path: "dashboard", component: DashboardComponent},
  {path: "admin", component: AdministracionComponent},
  {path: "admin_pro", component: AdministracionProyectosComponent},
  {path: "nego", component: NegociacionComponent},
  {path: "proc", component: ProcesoAdminComponent},
  {path: "mani", component: ManipulacionComponent},
  {path: "efica", component: EficaciaComponent},
  {path: "efici", component: EficienciaComponent},
  {path: "ries", component: RiesgosComponent},
  {path: "respro", component: RiesgosProyectosComponent},
  {path: "mode", component: ModeloComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
