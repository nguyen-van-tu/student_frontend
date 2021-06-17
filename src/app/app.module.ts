import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListStudentComponent } from './list-student/list-student.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateProductComponent } from './update-product/update-product.component';


@NgModule({
  declarations: [
    AppComponent,
    ListStudentComponent,
    CreateStudentComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
