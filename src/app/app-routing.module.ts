import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { GstAddComponent } from './gst-add/gst-add.component';
import { GstGetComponent } from './gst-get/gst-get.component';
import { GstEditComponent } from './gst-edit/gst-edit.component';


const routes:Routes=[
  {
    path:'form/create',
    component:GstAddComponent,

  },
  {
    path:'form',
    component:GstGetComponent
  },
  {
    path:'form/edit/:id',
    component:GstEditComponent,
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
