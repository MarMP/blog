import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './ultimos/posts/posts.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NotFoundComponent,
    HomeComponent,
  ]
})
export class PagesModule { }
