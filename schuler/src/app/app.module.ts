import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskReadComponent } from './components/task/task-read/task-read.component';
import { HomeComponent } from './views/home/home.component';
import { TaskCrudComponent } from './views/task-crud/task-crud.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TaskReadComponent,
    HomeComponent,
    TaskCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
