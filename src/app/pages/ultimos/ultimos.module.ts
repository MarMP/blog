import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UltimosRoutingModule } from './ultimos-routing.module';
import { PostsComponent } from './posts/posts.component';


@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    UltimosRoutingModule
  ],
  exports: [
    PostsComponent
  ]
})
export class UltimosModule { }
