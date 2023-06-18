import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnCreateNewProjComponent } from './components/btn-create-new-proj/btn-create-new-proj.component';
import { NewProjectsComponent } from './components/new-projects/new-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    BtnCreateNewProjComponent,
    NewProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
