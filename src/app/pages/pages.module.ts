import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//pages
import { HomeComponent } from './home/home.component';

//modulo Routing
import { RoutingModule } from './routing.module';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule

  ]
})
export class PagesModule { }