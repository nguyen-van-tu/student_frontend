import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { ListStudentComponent } from './list-student/list-student.component';

const routes: Routes = [
  {
    path: '',
    component: ListStudentComponent
  },
  {
    path: 'create',
    component: CreateStudentComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
