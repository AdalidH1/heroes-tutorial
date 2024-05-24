import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './view/heroes/form/form.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './view/heroes/dashboard/dashboard.component';
import { TableComponent } from './view/heroes/table/table.component';

const routes: Routes = [
  {path:"", redirectTo: "/dashboard", pathMatch: "full"},
  {path: "dashboard", component: DashboardComponent},
  {path: "form", component: FormComponent},
  {path: "table", component: TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
