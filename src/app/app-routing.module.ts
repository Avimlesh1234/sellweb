import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';
import { ParductDetailsComponent } from './parduct-details/parduct-details.component';

const routes: Routes = [

  {path:"home",component:HomeComponent},
  {path:"upload",component:UploadComponent},

  {path:"buy",component:ParductDetailsComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
