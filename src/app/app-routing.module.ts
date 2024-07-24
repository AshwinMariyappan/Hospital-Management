import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CardiologistComponent } from './cardiologist/cardiologist.component';
import { NeurologistComponent } from './neurologist/neurologist.component';
import { PediatricsComponent } from './pediatrics/pediatrics.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'cardia',component:CardiologistComponent},
  {path:'neuro',component:NeurologistComponent},
  {path:'pedia',component:PediatricsComponent},
  {path:'login',component:LoginComponent},
  {path:'**',component:NotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
