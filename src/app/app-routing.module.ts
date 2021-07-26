import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PostsComponent } from './pages/ultimos/posts/posts.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
    //Carga perezosa para ello se usa loadChildren en lugar de cargar el componente directamente
    //el atributo loadChildren espera una funcion (por eso usamos función flecha)
    //dentro usamos el import que devuelve una promise esto es para la carga asincrona y cuando devuelve le indicamos el modulo 
    //que es page modules

   // loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path:'posts',
   // component: PostsComponent
   loadChildren: () => import('./pages/ultimos/ultimos.module').then(m => m.UltimosModule)
  },
  {
    path:'**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
