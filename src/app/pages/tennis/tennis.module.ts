import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TennisRoutingModule } from './tennis-routing.module';
import { AddTennisComponent } from './add-tennis/add-tennis.component';
import { ListTennisComponent } from './list-tennis/list-tennis.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TennisService } from './tennis.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AddTennisComponent, ListTennisComponent],
  imports: [
    CommonModule,
    TennisRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    TennisService
  ]
})
export class TennisModule { }
