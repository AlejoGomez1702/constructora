import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router'
// import { PruebaComponent } from './components/prueba/prueba.component';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FooterComponent } from './components/footer/footer.component';

const routes:Routes = [
  {
    path:'prueba',
    component:FooterComponent
  },
  {
    path:'home',
    component:InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
