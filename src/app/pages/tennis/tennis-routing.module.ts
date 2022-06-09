import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTennisComponent } from './add-tennis/add-tennis.component';
import { ListTennisComponent } from './list-tennis/list-tennis.component';


const routes: Routes = [
  {
    path: "",
    component: AddTennisComponent
  },
  {
    path: "tennis/:id",
    component: ListTennisComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TennisRoutingModule { }
