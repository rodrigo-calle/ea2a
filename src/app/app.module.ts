import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { AppRoutingModule } from './app-routing.module';
import { TeamComponent } from './pages/team/team.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectNewComponent } from './access/project/project-new/project-new.component';
import { ProjectListComponent } from './access/project/project-list/project-list.component';
import { ApartmentNewComponent } from './access/apartment/apartment-new/apartment-new.component';
import { ApartmentListComponent } from './access/apartment/apartment-list/apartment-list.component';
import { ProjectComponent } from './pages/project/project.component';
import { ApartmentComponent } from './pages/apartment/apartment.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    TeamComponent,
    ProjectNewComponent,
    ProjectListComponent,
    ApartmentNewComponent,
    ApartmentListComponent,
    ProjectComponent,
    ApartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
